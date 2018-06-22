/**
* @title Bankera
* @symbol BNK
* @ethContractAddr 0xc80c5e40220172b36adee2c951f26f2a577810c5
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xc80c5e40220172b36adee2c951f26f2a577810c5?apiKey=freekey', (error, response, body) => {
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
