/**
* @title BitAsean
* @symbol BAS
* @ethContractAddr 0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1?apiKey=freekey', (error, response, body) => {
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
