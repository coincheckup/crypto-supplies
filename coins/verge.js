/**
 * @title Verge
 * @symbol XVG
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request({
        uri: 'https://verge-blockchain.info/ext/getmoneysupply',
        rejectUnauthorized: false,
        json: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                m: 16555000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};