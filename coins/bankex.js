/**
* @title Bankex
* @symbol BKX
* @ethContractAddr 0x45245bc59219eeaaf6cd3f382e078a461ff9de7b
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x45245bc59219eeaaf6cd3f382e078a461ff9de7b?apiKey=freekey', (error, response, body) => {
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
