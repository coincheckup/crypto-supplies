/**
* @title Dignity
* @symbol DIG
* @ethContractAddr 0x093e5c256ff8b32c7f1377f4c20e331674c77f00
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x093e5c256ff8b32c7f1377f4c20e331674c77f00?apiKey=freekey', (error, response, body) => {
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
