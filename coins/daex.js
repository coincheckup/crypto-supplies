/**
 * @title DAEX
 * @symbol DAX
 * @ethContractAddr 0x0b4bdc478791897274652dc15ef5c135cae61e60
 * @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
    request('http://api.ethplorer.io/getTokenInfo/0x0b4bdc478791897274652dc15ef5c135cae61e60?apiKey=freekey', (error, response, body) => {
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
