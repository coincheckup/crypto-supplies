/**
* @title Bibox Token
* @symbol BIX
* @ethContractAddr 0xb3104b4b9da82025e8b9f8fb28b3553ce2f67069
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xb3104b4b9da82025e8b9f8fb28b3553ce2f67069?apiKey=freekey', (error, response, body) => {
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
