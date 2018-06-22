/**
* @title ERC20
* @symbol ERC20
* @ethContractAddr 0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb?apiKey=freekey', (error, response, body) => {
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
