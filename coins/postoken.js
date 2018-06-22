/**
* @title PoSToken
* @symbol POS
* @ethContractAddr 0xee609fe292128cad03b786dbb9bc2634ccdbe7fc
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xee609fe292128cad03b786dbb9bc2634ccdbe7fc?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
