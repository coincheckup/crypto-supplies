/**
* @title EncryptoTel [ETH]
* @symbol ETT
* @ethContractAddr 0xe0c72452740414d861606a44ccd5ea7f96488278
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xe0c72452740414d861606a44ccd5ea7f96488278?apiKey=freekey', (error, response, body) => {
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
