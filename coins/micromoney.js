/**
* @title MicroMoney
* @symbol AMM
* @ethContractAddr 0x8b1f49491477e0fb46a29fef53f1ea320d13c349
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x8b1f49491477e0fb46a29fef53f1ea320d13c349?apiKey=freekey', (error, response, body) => {
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
