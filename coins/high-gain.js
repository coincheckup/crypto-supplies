/**
* @title High Gain
* @symbol HIGH
* @ethContractAddr 0x63da8d2d6dea6635e5aeb2150cf3e7d2bb23d604
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x63da8d2d6dea6635e5aeb2150cf3e7d2bb23d604?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -3)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
