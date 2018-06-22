/**
* @title Ethereum Gold
* @symbol ETG
* @ethContractAddr 0x28c8d01ff633ea9cd8fc6a451d7457889e698de6
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x28c8d01ff633ea9cd8fc6a451d7457889e698de6?apiKey=freekey', (error, response, body) => {
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
