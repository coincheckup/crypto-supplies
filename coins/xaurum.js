/**
* @title Xaurum
* @symbol XAUR
* @ethContractAddr 0x4DF812F6064def1e5e029f1ca858777CC98D2D81
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x4DF812F6064def1e5e029f1ca858777CC98D2D81?apiKey=freekey', (error, response, body) => {
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
