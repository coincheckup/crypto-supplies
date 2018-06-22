/**
* @title IOStoken
* @symbol IOST
* @ethContractAddr 0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab?apiKey=freekey', (error, response, body) => {
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
