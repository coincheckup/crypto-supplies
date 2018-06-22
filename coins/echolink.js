/**
* @title EchoLink
* @symbol EKO
* @ethContractAddr 0xa6a840e50bcaa50da017b91a0d86b8b2d41156ee
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xa6a840e50bcaa50da017b91a0d86b8b2d41156ee?apiKey=freekey', (error, response, body) => {
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
