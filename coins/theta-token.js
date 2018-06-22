/**
* @title Theta Token
* @symbol THETA
* @ethContractAddr 0x3883f5e181fccaF8410FA61e12b59BAd963fb645
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x3883f5e181fccaF8410FA61e12b59BAd963fb645?apiKey=freekey', (error, response, body) => {
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
