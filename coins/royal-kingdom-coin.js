/**
* @title Royal Kingdom Coin
* @symbol RKC
* @ethContractAddr 0x6ccb56947ea1d6efdc81acfbacd8263ddfa9b202
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x6ccb56947ea1d6efdc81acfbacd8263ddfa9b202?apiKey=freekey', (error, response, body) => {
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
