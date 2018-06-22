/**
* @title Ethorse
* @symbol HORSE
* @ethContractAddr 0x5b0751713b2527d7f002c0c4e2a37e1219610a6b
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x5b0751713b2527d7f002c0c4e2a37e1219610a6b?apiKey=freekey', (error, response, body) => {
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
