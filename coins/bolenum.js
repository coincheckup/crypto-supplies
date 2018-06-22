/**
* @title Bolenum
* @symbol BLN
* @ethContractAddr 0xCA29db4221c111888a7e80b12eAc8a266Da3Ee0d
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xCA29db4221c111888a7e80b12eAc8a266Da3Ee0d?apiKey=freekey', (error, response, body) => {
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
