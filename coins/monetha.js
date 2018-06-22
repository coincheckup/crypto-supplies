/**
* @title Monetha
* @symbol MTH
* @ethContractAddr 0xaf4dce16da2877f8c9e00544c93b62ac40631f16
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xaf4dce16da2877f8c9e00544c93b62ac40631f16?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -5)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
