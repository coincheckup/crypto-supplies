/**
* @title Parkgene
* @symbol GENE
* @ethContractAddr 0x6dd4e4aad29a40edd6a409b9c1625186c9855b4d
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x6dd4e4aad29a40edd6a409b9c1625186c9855b4d?apiKey=freekey', (error, response, body) => {
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
