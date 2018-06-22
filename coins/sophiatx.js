/**
* @title SophiaTX
* @symbol SPHTX
* @ethContractAddr 0x3833dda0aeb6947b98ce454d89366cba8cc55528
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x3833dda0aeb6947b98ce454d89366cba8cc55528?apiKey=freekey', (error, response, body) => {
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
