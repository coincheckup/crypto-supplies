/**
* @title Paragon
* @symbol PRG
* @ethContractAddr 0x7728dFEF5aBd468669EB7f9b48A7f70a501eD29D
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x7728dFEF5aBd468669EB7f9b48A7f70a501eD29D?apiKey=freekey', (error, response, body) => {
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
