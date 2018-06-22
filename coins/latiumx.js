/**
* @title LatiumX
* @symbol LATX
* @ethContractAddr 0x2f85e502a988af76f7ee6d83b7db8d6c0a823bf9
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x2f85e502a988af76f7ee6d83b7db8d6c0a823bf9?apiKey=freekey', (error, response, body) => {
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
