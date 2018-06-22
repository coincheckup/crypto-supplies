/**
* @title Xenon
* @symbol XNN
* @ethContractAddr 0xab95e915c123fded5bdfb6325e35ef5515f1ea69
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xab95e915c123fded5bdfb6325e35ef5515f1ea69?apiKey=freekey', (error, response, body) => {
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
