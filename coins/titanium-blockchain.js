/**
* @title Titanium Blockchain
* @symbol BAR
* @ethContractAddr 0xc7579bb99af590ec71c316e1ac4436c535039594
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xc7579bb99af590ec71c316e1ac4436c535039594?apiKey=freekey', (error, response, body) => {
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
