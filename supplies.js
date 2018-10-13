#!/usr/bin/env node

const yargs = require('yargs');
const fs = require('fs');
const chalk = require('chalk');
const Cacheman = require('cacheman-file');
const express = require('express');
const RateLimiter = require('request-rate-limiter');
const { parse } = require('url');
const rqstSrc = require('request');
const doctrine = require('doctrine');
const _ = require('lodash');

const rqst = rqstSrc.defaults({
    pool: {
        maxSockets: Infinity
    },
    timeout: 10000
})

var cacheTTL = 3600,
    ethTokenCacheTTL = 86400,
    limiters = {},
    cmcData = {};

const cache = new Cacheman({ ttl: cacheTTL });

class CoinNotFoundError extends Error {}

const maybeParseJSON = (request, response) => {
    if (typeof request === 'object'
        && !_.isUndefined(request.json)
        && !_.isUndefined(response)
        && request.json == true
    ) {
        try {
            response.body = !_.isUndefined(response.body)
                ? JSON.parse(response.body)
                : undefined
        } catch (e) {}
    }

    return !_.isNil(response.body)
        ? response.body
        : undefined
}

const request = (req, callback) => {
    let url,
        limiterKey,
        limits = {
            'chainz.cryptoid.info': 6,
            'api.ethplorer.io': 30,
            'api.coinmarketcap.com': 30
        };

    if (typeof req === 'string') {
        url = req
    } else if (typeof req === 'object') {
        url = req.uri
    }

    limiterKey = parse(url).hostname

    if (typeof limiters[limiterKey] === 'undefined') {
        limiters[limiterKey] = new RateLimiter({
            rate: typeof limits[limiterKey] !== 'undefined'
                ? limits[limiterKey]
                : 60,
            maxWaitingTime: 60 * 60
        });
    }

    let cb = (error, response) => {
        if (typeof callback !== 'function') {
            return;
        }

        if (typeof response === 'undefined') {
            response = {
                statusCode: 999
            }
        }

        response.body = maybeParseJSON(req, response)

        callback(error, response, typeof response !== 'undefined'
            ? response.body
            : undefined
        )
    }

    if (typeof req.promise !== 'undefined') {
        return new Promise((resolve, reject) => {
            limiters[limiterKey]
                .request(req)
                .then(response => {
                    response.body = maybeParseJSON(req, response)

                    resolve(response.body)
                })
                .catch(err => {
                    reject(err)
                })
        });
    }

    limiters[limiterKey].request((err, backoff) => {
        if (err) {
            cb(err, null)
        } else {
            rqst(typeof req === 'object'
                    ? req
                    : {
                        uri: url
                    },
                (err, response, body) => {
                    if (err) {
                        cb(err, response)
                    } else if (response.statusCode === 429) {
                        backoff()
                    } else {
                        cb(err, response)
                    }
                }
            )
        }
    }, () => {})
};

const printSupplies = (id, supplies, opts) => {
    if (opts.pretty) {
        if (supplies instanceof Error) {
            console.log(id, chalk.red(supplies.message));
        } else {
            console.log(chalk.green(id));
            console.log('|-- Circulating:', typeof supplies.c !== 'undefined' ? supplies.c : 'N/A');
            console.log('|-- Total:', typeof supplies.t !== 'undefined' ? supplies.t : 'N/A');
            console.log('|-- Max:', typeof supplies.m !== 'undefined' ? supplies.m : 'N/A');
            console.log('');
        }
    } else {
        console.log(JSON.stringify(formatResult(id, supplies, opts)));
    }
};

const formatResult = (id, supplies, opts) => {
    if (supplies instanceof Error) {
        let payload = {
            error: supplies.message
        };

        if (typeof opts.includeIds !== 'undefined' && opts.includeIds) {
            payload.id = id;
        }

        return payload
    } else {
        if (typeof opts.includeIds !== 'undefined' && opts.includeIds) {
            supplies.id = id;
        }

        return supplies
    }

    return null
}

async function getCMCSupply(id, opts) {
    if (_.isUndefined(opts)) {
        opts = {
            fetchAll: false
        }
    }

    if (_.isUndefined(opts.fetchAll)) {
        opts.fetchAll = false
    }

    let coinMeta = await getCoinMeta(id)

    if (_.isUndefined(cmcData[coinMeta.cmcId])) {
        if (opts.fetchAll || Object.keys(cmcData).length === 0) {
            cmcData = await request({
                uri: 'https://api.coinmarketcap.com/v1/ticker/?limit=0',
                json: true,
                promise: true
            })

            cmcData = _.keyBy(cmcData, 'id')
        } else {
            cmcData[coinMeta.cmcId] = (await request({
                uri: `https://api.coinmarketcap.com/v1/ticker/${coinMeta.cmcId}`,
                json: true,
                promise: true
            }))[0]
        }
    }

    return !_.isNil(cmcData[coinMeta.cmcId])
        ? _.mapValues({
            c: cmcData[coinMeta.cmcId].available_supply,
            t: cmcData[coinMeta.cmcId].total_supply,
            m: cmcData[coinMeta.cmcId].max_supply
        }, value => {
            return _.isNull(value)
                ? null
                : Number(value)
        })
        : null
}

const getCoinMeta = async(id) => {
    return new Promise((resolve, reject) => {
        try {
            let path = `${__dirname}/coins/${id}.js`,
                src = fs.readFileSync(path).toString(),
                metaRaw = src.match(/\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*\//gm),
                metaParsed = metaRaw !== null
                    ? doctrine.parse(metaRaw[0], { unwrap: true, recoverable: true })
                    : {tags: []},
                metaObj = {}

            metaParsed.tags.forEach(item => {
                metaObj[item.title] = item.description;
            });

            resolve(metaObj)
        } catch (e) {
            reject(new CoinNotFoundError(e.message))
        }
    })
}

const getSupplies = async(id, opts) => {
    return new Promise((resolve, reject) => {
        var file = './coins/' + id + '.js';

        cache.get(id, (err, value) => {
            if (err === null && value !== null) {
                resolve(formatResult(id, value, opts));
            } else {
                try {
                    let res = require(file);

                    res(async(response) => {
                        if (!(response instanceof Error)) {
                            let meta = await getCoinMeta(id)

                            // Cache ETH token results longer
                            // since they are so slow to fetch
                            cache.set(
                                id,
                                response,
                                !_.isUndefined(meta.ethContractAddr)
                                    ? ethTokenCacheTTL
                                    : opts.cacheTTL
                            );
                        }

                        if (response instanceof Error) {
                            if (opts.onlyImplemented && !opts.fallback && (response.message === 'Not Implemented' || response.message === 'Not Available')) {
                                return
                            }

                            if (opts.fallback) {
                                let cmcSupply = await getCMCSupply(id)

                                if (!_.isNil(cmcSupply)) {
                                    response = cmcSupply
                                }
                            }
                        }

                        if (_.isNil(response.c) || _.isNaN(response.c) || response.c <= 0) {
                            let cmcSupply = await getCMCSupply(id)

                            if (!_.isNil(cmcSupply)) {
                                response = cmcSupply
                            }
                        }

                        resolve(formatResult(id, response, opts));
                    }, request);
                } catch (e) {
                    if (e.message === 'Not Implemented' && opts.onlyImplemented) {
                        return
                    }

                    resolve(formatResult(id, new Error(e.message), opts));
                }
            }
        });
    })
};

const getList = async() => {
    return new Promise(async(resolve, reject) => {
        let list = []

        let files = fs.readdirSync('./coins')

        for (let filename of files) {
            let id = filename.replace('.js', ''),
                metaObj = await getCoinMeta(id);

            file = {
                id: id,
                name: typeof metaObj.title !== 'undefined' ? metaObj.title : null,
                symbol: typeof metaObj.symbol !== 'undefined' ? metaObj.symbol : null,
                implementation: typeof metaObj.implementation !== 'undefined' ? metaObj.implementation : null,
                cmcId: typeof metaObj.cmcId !== 'undefined' ? metaObj.cmcId : null,
            }

            list.push(file)
        }

        resolve(list)
    })
}

let keepOneWarm = async(id, argv) => {
    await getSupplies(id, argv)

    setTimeout(() => {
        keepOneWarm(id, argv)
    }, 5000)
}

let keepAllWarm = (argv) => {
    argv.fetchAll = true;

    fs.readdir('./coins', (err, files) => {
        files.forEach(async(file) => {
            let id = file.replace('.js', '')

            keepOneWarm(id, argv)
        });
    });
}

yargs.usage('$0 <cmd> [args]')
    .command('get [id]', 'Get supplies for a specific coin id', (yargs) => {
        yargs.positional('id', {
            type: 'string',
            describe: 'the coin id to get supplies for'
        })
    }, async(argv) => {
        printSupplies(argv.id, await getSupplies(argv.id, argv), argv);
    })
    .command('get-all', 'Get supplies for all known coins', (yargs) => {
    }, function (argv) {
        argv.includeIds = true;
        argv.fetchAll = true;

        fs.readdir('./coins', (err, files) => {
            files.forEach(async(file) => {
                let id = file.replace('.js', '')

                printSupplies(id, await getSupplies(id, argv), argv);
            });
        });
    })
    .command('serve', 'Start an express.js based web server', (yargs) => {
        yargs.option('port', {
            alias: 'p',
            default: 3000
        })

        yargs.option('timeout', {
            alias: 't',
            default: 10000
        })
    }, (argv) => {
        const app = express()

        keepAllWarm(argv);

        app.get('/', async(req, res) => {
            let list = await getList()

            res.send(list)
        })

        app.get('/~all', async(req, res) => {
            res.setHeader('Transfer-Encoding', 'chunked');

            let opts = {
                    fallback: argv.fallback
                },
                files = await getList(),
                remaining = files.length

            files.forEach(async(file) => {
                let id = file.id,
                    result = {}

                try {
                    result = await getSupplies(id, opts)
                } catch (e) {
                    result = e
                }

                result = formatResult(id, result, opts)

                Object.assign(result, {
                    meta: file
                })

                res.write(JSON.stringify(result) + "\n");
                remaining--
            })
        })

        app.get('/:coinId', async(req, res) => {
            let opts = {
                    fallback: argv.fallback
                },
                id = req.params.coinId,
                result = {},
                meta = {};

            try {
                meta = await getCoinMeta(id)
            } catch (e) {
                res.status(404)
                   .send(`Coin id ${id} not found`);

                return
            }

            try {
                result = await getSupplies(id, opts)
            } catch (e) {
                result = e
            }

            result = formatResult(id, result, opts)

            Object.assign(result, {
                meta: meta
            })

            res.send(result)
        })

        let srv = app.listen(argv.port, () => console.log(`Now listening on port ${argv.port}

> Available endpoints:

    - GET /             (lists all available coins)
    - GET /~all         (retrieves all supplies)
    - GET /coin-id:    (retrieves singular supply based on coin id)
`))

        srv.setTimeout(argv.timeout)
    })
    .option('pretty', {
        default: false,
        describe: 'pretty print output',
        type: 'boolean'
    })
    .option('fallback', {
        default: false,
        type: 'boolean'
    })
    .option('only-implemented', {
        default: false,
        describe: 'only display implemented coins',
        type: 'boolean'
    })
    .option('cacheTTL', {
        default: cacheTTL,
        describe: 'how long to cache results, in seconds',
        type: 'integer'
    })
    .help()
    .argv;
