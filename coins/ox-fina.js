/**
* @title OX Fina
* @symbol OX
* @ethContractAddr 0x65a15014964f2102ff58647e16a16a6b9e14bcf6
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x65a15014964f2102ff58647e16a16a6b9e14bcf6?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -3)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
