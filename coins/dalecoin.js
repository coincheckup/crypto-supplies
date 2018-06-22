/**
* @title Dalecoin
* @symbol DALC
* @ethContractAddr 0x07d9e49ea402194bf48a8276dafb16e4ed633317
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x07d9e49ea402194bf48a8276dafb16e4ed633317?apiKey=freekey', (error, response, body) => {
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
