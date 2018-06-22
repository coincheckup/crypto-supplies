/**
* @title Unikoin Gold
* @symbol UKG
* @ethContractAddr 0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b?apiKey=freekey', (error, response, body) => {
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
