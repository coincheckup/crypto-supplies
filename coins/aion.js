/**
* @title Aion
* @symbol AION
* @ethContractAddr 0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466?apiKey=freekey', (error, response, body) => {
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
