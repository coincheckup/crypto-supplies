/**
* @title Modum
* @symbol MOD
* @ethContractAddr 0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e?apiKey=freekey', (error, response, body) => {
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
