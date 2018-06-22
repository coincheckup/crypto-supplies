/**
* @title Cappasity
* @symbol CAPP
* @ethContractAddr 0x04f2e7221fdb1b52a68169b25793e51478ff0329
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x04f2e7221fdb1b52a68169b25793e51478ff0329?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
