/**
* @title Silent Notary
* @symbol SNTR
* @ethContractAddr 0x2859021ee7f2cb10162e67f33af2d22764b31aff
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x2859021ee7f2cb10162e67f33af2d22764b31aff?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
