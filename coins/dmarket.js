/**
* @title DMarket
* @symbol DMT
* @ethContractAddr 0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1?apiKey=freekey', (error, response, body) => {
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
