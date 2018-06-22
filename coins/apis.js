/**
* @title APIS
* @symbol APIS
* @ethContractAddr 0x4c0fbe1bb46612915e7967d2c3213cd4d87257ad
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x4c0fbe1bb46612915e7967d2c3213cd4d87257ad?apiKey=freekey', (error, response, body) => {
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
