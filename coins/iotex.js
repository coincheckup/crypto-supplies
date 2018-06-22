/**
* @title IoTeX
* @symbol IOTX
* @ethContractAddr 0x6fb3e0a217407efff7ca062d46c26e5d60a14d69
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x6fb3e0a217407efff7ca062d46c26e5d60a14d69?apiKey=freekey', (error, response, body) => {
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
