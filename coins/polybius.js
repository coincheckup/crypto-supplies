/**
* @title Polybius
* @symbol PLBT
* @ethContractAddr 0x0affa06e7fbe5bc9a764c979aa66e8256a631f02
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x0affa06e7fbe5bc9a764c979aa66e8256a631f02?apiKey=freekey', (error, response, body) => {
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
