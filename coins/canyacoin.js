/**
* @title CanYaCoin
* @symbol CAN
* @ethContractAddr 0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0?apiKey=freekey', (error, response, body) => {
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
