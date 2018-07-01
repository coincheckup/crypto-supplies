#!/usr/bin/env node

const yargs = require('yargs');
const fs = require('fs');
const chalk = require('chalk');
const Cacheman = require('cacheman-file');
const express = require('express');
const RateLimiter = require('request-rate-limiter');
const { parse } = require('url');
const rqst = require('request');
const doctrine = require('doctrine');

var cacheTTL = 600,
    limiters = {};

const cache = new Cacheman({ ttl: cacheTTL });

const maybeParseJSON = (request, response) => {
    if (typeof request === 'object'
        && typeof request.json !== 'undefined'
        && typeof response !== 'undefined'
        && request.json == true
    ) {
        try {
            response.body = typeof response.body !== 'undefined'
                ? JSON.parse(response.body)
                : undefined
        } catch (e) {}
    }

    return response.body
}

const request = (req, callback) => {
    let url,
        limiterKey,
        limits = {
            'chainz.cryptoid.info': 6,
            'api.ethplorer.io': 30
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
            backoff()
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

const getSupplies = async(id, opts) => {
    return new Promise((resolve, reject) => {
        var file = './coins/' + id + '.js';

        cache.get(id, (err, value) => {
            if (err === null && value !== null) {
                resolve(formatResult(id, value, opts));
            } else {
                try {
                    let res = require(file);

                    res((response) => {
                        if (!(response instanceof Error)) {
                            cache.set(id, response, opts.cacheTTL);
                        }

                        if (response instanceof Error
                            && response.message === 'Not Implemented'
                            && opts.onlyImplemented
                        ) {
                            return
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

const getList = () => {
    let list = []

    let files = fs.readdirSync('./coins')

    for (let filename of files) {
        let file = {},
            path = __dirname + '/coins/' + filename,
            src = fs.readFileSync(path).toString(),
            metaRaw = src.match(/\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*\//gm),
            metaParsed = metaRaw !== null
                ? doctrine.parse(metaRaw[0], { unwrap: true, recoverable: true })
                : {tags: []},
            id = filename.replace('.js', ''),
            metaObj = {};

        metaParsed.tags.forEach(item => {
            metaObj[item.title] = item.description;
        });

        file = {
            id: id,
            name: typeof metaObj.title !== 'undefined' ? metaObj.title : null,
            symbol: typeof metaObj.symbol !== 'undefined' ? metaObj.symbol : null,
            implementation: typeof metaObj.implementation !== 'undefined' ? metaObj.implementation : null,
            cmcId: typeof metaObj.cmcId !== 'undefined' ? metaObj.cmcId : null,
        }

        list.push(file)
    }

    return list
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
    }, (argv) => {
        const app = express()

        app.get('/', (req, res) => {
            let list = getList()

            res.send(list)
        })

        app.listen(argv.port, () => console.log(`Now listening on port ${argv.port}

> Available endpoints:

    - GET /             (lists all available coins)
    - GET /~all         (retrieves all supplies)
    - GET /:coin-id:    (retrieves singular supply based on coin id)
`))
    })
    .option('pretty', {
        default: false,
        describe: 'pretty print output',
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
