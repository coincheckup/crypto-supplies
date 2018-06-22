/**
* @title Ripio Credit Network
* @symbol RCN
* @ethContractAddr 0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6?apiKey=freekey', (error, response, body) => {
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
