/**
* @title AdShares
* @symbol ADST
* @ethContractAddr 0x422866a8F0b032c5cf1DfBDEf31A20F4509562b0
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x422866a8F0b032c5cf1DfBDEf31A20F4509562b0?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
