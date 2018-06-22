/**
* @title CashBet Coin
* @symbol CBC
* @ethContractAddr 0x26DB5439F651CAF491A87d48799dA81F191bDB6b
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x26DB5439F651CAF491A87d48799dA81F191bDB6b?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
