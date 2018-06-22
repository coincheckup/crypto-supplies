/**
* @title QuarkChain
* @symbol QKC
* @ethContractAddr 0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664?apiKey=freekey', (error, response, body) => {
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
