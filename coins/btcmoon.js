/**
* @title BTCMoon
* @symbol BTCM
* @ethContractAddr 0xa9aad2dc3a8315caeee5f458b1d8edc31d8467bd
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xa9aad2dc3a8315caeee5f458b1d8edc31d8467bd?apiKey=freekey', (error, response, body) => {
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
