/**
* @title Sentinel Chain
* @symbol SENC
* @ethContractAddr 0xa13f0743951b4f6e3e3aa039f682e17279f52bc3
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xa13f0743951b4f6e3e3aa039f682e17279f52bc3?apiKey=freekey', (error, response, body) => {
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
