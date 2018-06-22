/**
* @title Gladius Token
* @symbol GLA
* @ethContractAddr 0x71D01dB8d6a2fBEa7f8d434599C237980C234e4C
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x71D01dB8d6a2fBEa7f8d434599C237980C234e4C?apiKey=freekey', (error, response, body) => {
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
