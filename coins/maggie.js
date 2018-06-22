/**
* @title Maggie
* @symbol MAG
* @ethContractAddr 0x647f274b3a7248d6cf51b35f08e7e7fd6edfb271
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x647f274b3a7248d6cf51b35f08e7e7fd6edfb271?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
