/**
* @title ConnectJob
* @symbol CJT
* @ethContractAddr 0x3abdff32f76b42e7635bdb7e425f0231a5f3ab17
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x3abdff32f76b42e7635bdb7e425f0231a5f3ab17?apiKey=freekey', (error, response, body) => {
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
