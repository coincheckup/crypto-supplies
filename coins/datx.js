/**
* @title DATx
* @symbol DATX
* @ethContractAddr 0xabbbb6447b68ffd6141da77c18c7b5876ed6c5ab
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xabbbb6447b68ffd6141da77c18c7b5876ed6c5ab?apiKey=freekey', (error, response, body) => {
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
