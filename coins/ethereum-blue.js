/**
* @title Blue Protocol
* @symbol BLUE
* @ethContractAddr 0x539efe69bcdd21a83efd9122571a64cc25e0282b
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x539efe69bcdd21a83efd9122571a64cc25e0282b?apiKey=freekey', (error, response, body) => {
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
