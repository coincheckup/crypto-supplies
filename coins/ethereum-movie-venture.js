/**
* @title Ethereum Movie Venture
* @symbol EMV
* @ethContractAddr 0xB802b24E0637c2B87D2E8b7784C055BBE921011a
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xB802b24E0637c2B87D2E8b7784C055BBE921011a?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
