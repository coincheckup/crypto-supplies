/**
* @title Viberate
* @symbol VIB
* @ethContractAddr 0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724?apiKey=freekey', (error, response, body) => {
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
