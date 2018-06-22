/**
* @title Sharechain
* @symbol SSS
* @ethContractAddr 0x7d3e7d41da367b4fdce7cbe06502b13294deb758
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x7d3e7d41da367b4fdce7cbe06502b13294deb758?apiKey=freekey', (error, response, body) => {
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
