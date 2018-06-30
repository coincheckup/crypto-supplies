/**
 * @title Polymath
 * @symbol POLY
 * @ethContractAddr 0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('http://api.ethplorer.io/getTokenInfo/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            var resp = {
                t: Number(body.totalSupply) * Math.pow(10, -18)
            };

            if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
                resp.c = Number(body.price.availableSupply);
            } else {
                resp.c = 300056960;
            }

            callback(resp);
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
