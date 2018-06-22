/**
* @title Astro
* @symbol ASTRO
* @ethContractAddr 0x7b22938ca841aa392c93dbb7f4c42178e3d65e88
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x7b22938ca841aa392c93dbb7f4c42178e3d65e88?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
