/**
* @title Mithril
* @symbol MITH
* @ethContractAddr 0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb?apiKey=freekey', (error, response, body) => {
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
