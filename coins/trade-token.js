/**
* @title Trade Token
* @symbol TIO
* @ethContractAddr 0x80bc5512561c7f85a3a9508c7df7901b370fa1df
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x80bc5512561c7f85a3a9508c7df7901b370fa1df?apiKey=freekey', (error, response, body) => {
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
