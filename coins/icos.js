/**
* @title ICOS
* @symbol ICOS
* @ethContractAddr 0x014b50466590340d41307cc54dcee990c8d58aa8
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x014b50466590340d41307cc54dcee990c8d58aa8?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
