/**
 * @title Basic Attention Token
 * @symbol BAT
 * @implementation Dynamic
 * @ethContractAddr 0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0
 */
var request = require('request');

module.exports = (callback) => {
    request('http://api.ethplorer.io/getTokenInfo/0x0d8775f648430679a709e98d2b0cb6250d2887ef?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            var resp = {
                t: Number(body.totalSupply) * Math.pow(10, -18)
            };

            if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
                resp.c = Number(body.price.availableSupply);
            }

            callback(resp);
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
