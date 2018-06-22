/**
* @title COPYTRACK
* @symbol CPY
* @ethContractAddr 0xf44745fbd41f6a1ba151df190db0564c5fcc4410
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xf44745fbd41f6a1ba151df190db0564c5fcc4410?apiKey=freekey', (error, response, body) => {
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
