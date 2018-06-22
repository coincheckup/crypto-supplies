/**
* @title Starbase
* @symbol STAR
* @ethContractAddr 0xf70a642bd387f94380ffb90451c2c81d4eb82cbc
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xf70a642bd387f94380ffb90451c2c81d4eb82cbc?apiKey=freekey', (error, response, body) => {
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
