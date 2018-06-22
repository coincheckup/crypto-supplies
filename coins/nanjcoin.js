/**
* @title NANJCOIN
* @symbol NANJ
* @ethContractAddr 0xffe02ee4c69edf1b340fcad64fbd6b37a7b9e265
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xffe02ee4c69edf1b340fcad64fbd6b37a7b9e265?apiKey=freekey', (error, response, body) => {
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
