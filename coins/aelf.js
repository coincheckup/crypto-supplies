/**
* @title aelf
* @symbol ELF
* @ethContractAddr 0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e?apiKey=freekey', (error, response, body) => {
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
