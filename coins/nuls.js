/**
* @title Nuls
* @symbol NULS
* @ethContractAddr 0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c?apiKey=freekey', (error, response, body) => {
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
