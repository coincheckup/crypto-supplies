/**
* @title Lampix
* @symbol PIX
* @ethContractAddr 0x8eFFd494eB698cc399AF6231fCcd39E08fd20B15
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x8eFFd494eB698cc399AF6231fCcd39E08fd20B15?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
