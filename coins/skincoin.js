/**
* @title SkinCoin
* @symbol SKIN
* @ethContractAddr 0x2bdc0d42996017fce214b21607a515da41a9e0c5
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x2bdc0d42996017fce214b21607a515da41a9e0c5?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
