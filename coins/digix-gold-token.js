/**
* @title Digix Gold Token
* @symbol DGX
* @ethContractAddr 0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -9)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
