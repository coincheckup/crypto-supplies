/**
* @title ETHLend
* @symbol LEND
* @ethContractAddr 0x80fB784B7eD66730e8b1DBd9820aFD29931aab03
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03?apiKey=freekey', (error, response, body) => {
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
