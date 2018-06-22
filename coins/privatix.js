/**
* @title Privatix
* @symbol PRIX
* @ethContractAddr 0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a?apiKey=freekey', (error, response, body) => {
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
