/**
 * @title Steem
 * @symbol STEEM
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request({
        uri: 'https://api.steemjs.com/get_dynamic_global_properties',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.current_supply.replace(' STEEM', '')),
                t: Number(body.virtual_supply.replace(' STEEM', ''))
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
