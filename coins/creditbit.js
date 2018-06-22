/**
* @title Creditbit
* @symbol CRB
* @ethContractAddr 0xAef38fBFBF932D1AeF3B808Bc8fBd8Cd8E1f8BC5
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xAef38fBFBF932D1AeF3B808Bc8fBd8Cd8E1f8BC5?apiKey=freekey', (error, response, body) => {
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
