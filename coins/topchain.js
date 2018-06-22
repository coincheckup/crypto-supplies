/**
* @title TopChain
* @symbol TOPC
* @ethContractAddr 0x1b6c5864375b34af3ff5bd2e5f40bc425b4a8d79
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x1b6c5864375b34af3ff5bd2e5f40bc425b4a8d79?apiKey=freekey', (error, response, body) => {
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
