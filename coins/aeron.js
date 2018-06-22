/**
* @title Aeron
* @symbol ARN
* @ethContractAddr 0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6?apiKey=freekey', (error, response, body) => {
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
