/**
* @title MCAP
* @symbol MCAP
* @ethContractAddr 0x93e682107d1e9defb0b5ee701c71707a4b2e46bc
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x93e682107d1e9defb0b5ee701c71707a4b2e46bc?apiKey=freekey', (error, response, body) => {
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
