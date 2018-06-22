/**
* @title Oyster Shell
* @symbol SHL
* @ethContractAddr 0x8542325b72c6d9fc0ad2ca965a78435413a915a0
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x8542325b72c6d9fc0ad2ca965a78435413a915a0?apiKey=freekey', (error, response, body) => {
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
