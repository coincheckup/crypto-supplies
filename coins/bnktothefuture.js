/**
* @title BnkToTheFuture
* @symbol BFT
* @ethContractAddr 0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f?apiKey=freekey', (error, response, body) => {
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
