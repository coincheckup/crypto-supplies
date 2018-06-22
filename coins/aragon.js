/**
* @title Aragon
* @symbol ANT
* @ethContractAddr 0x960b236a07cf122663c4303350609a66a7b288c0
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x960b236a07cf122663c4303350609a66a7b288c0?apiKey=freekey', (error, response, body) => {
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
