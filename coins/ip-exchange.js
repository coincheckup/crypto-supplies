/**
* @title IP Exchange
* @symbol IPSX
* @ethContractAddr 0x001f0aa5da15585e5b2305dbab2bac425ea71007
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x001f0aa5da15585e5b2305dbab2bac425ea71007?apiKey=freekey', (error, response, body) => {
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
