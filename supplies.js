#!/usr/bin/env node

const {NodeVM} = require('vm2');
const vm = new NodeVM({
    console: 'inherit',
    require: {
        external: ['request'],
        import: ['request'],
        root: './'
    },
    timeout: 1000
});

const yargs = require('yargs');
const fs = require('fs');
const chalk = require('chalk');
const Cacheman = require('cacheman-file');

var cacheTTL = 600;

const cache = new Cacheman({ ttl: cacheTTL });

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
        if (supplies instanceof Error) {
            let payload = {
                error: supplies.message
            };

            if (typeof opts.includeIds !== 'undefined' && opts.includeIds) {
                payload.id = id;
            }

            console.log(JSON.stringify(payload));
        } else {
            if (typeof opts.includeIds !== 'undefined' && opts.includeIds) {
                supplies.id = id;
            }

            console.log(JSON.stringify(supplies));
        }
    }
};

const getSupplies = (id, opts) => {
    var file = './coins/' + id + '.js';

    cache.get(id, (err, value) => {
        if (err === null && value !== null) {
            printSupplies(id, value, opts);
        } else {
            fs.readFile(file, 'utf8', (err, script) => {
                try {
                    let res = vm.run(script, 'supplies.js');

                    res((response) => {
                        if (!(response instanceof Error)) {
                            cache.set(id, response, opts.cacheTTL);
                        }

                        if (opts.onlyImplemented && response instanceof Error && response.message === 'Not Implemented') {
                            return;
                        }

                        printSupplies(id, response, opts);
                    });
                } catch (e) {
                    printSupplies(id, new Error(e.message), opts);
                }
            });
        }
    });
};

yargs.usage('$0 <cmd> [args]')
    .command('get [id]', 'Get supplies for a specific coin id', (yargs) => {
        yargs.positional('id', {
            type: 'string',
            describe: 'the coin id to get supplies for'
        })
    }, function (argv) {
        getSupplies(argv.id, argv);
    })
    .command('get-all', 'Get supplies for all known coins', (yargs) => {
    }, function (argv) {
        argv.includeIds = true;

        fs.readdir('./coins', (err, files) => {
            files.forEach(file => {
                getSupplies(file.replace('.js', ''), argv);
            });
        });
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
