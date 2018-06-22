/**
* @title Power Ledger
* @symbol POWR
* @ethContractAddr 0x595832f8fc6bf59c85c527fec3740a1b7a361269
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x595832f8fc6bf59c85c527fec3740a1b7a361269?apiKey=freekey', (error, response, body) => {
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
