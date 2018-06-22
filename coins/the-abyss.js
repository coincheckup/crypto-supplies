/**
* @title The Abyss
* @symbol ABYSS
* @ethContractAddr 0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6?apiKey=freekey', (error, response, body) => {
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
