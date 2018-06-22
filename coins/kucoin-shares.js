/**
* @title KuCoin Shares
* @symbol KCS
* @ethContractAddr 0x039b5649a59967e3e936d7471f9c3700100ee1ab
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x039b5649a59967e3e936d7471f9c3700100ee1ab?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
