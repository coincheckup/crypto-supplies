/**
* @title 1World
* @symbol 1WO
* @ethContractAddr 0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
