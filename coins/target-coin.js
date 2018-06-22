/**
* @title Target Coin
* @symbol TGT
* @ethContractAddr 0xac3da587eac229c9896d919abc235ca4fd7f72c1
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xac3da587eac229c9896d919abc235ca4fd7f72c1?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -1)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
