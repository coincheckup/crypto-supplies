/**
* @title Stox
* @symbol STX
* @ethContractAddr 0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45?apiKey=freekey', (error, response, body) => {
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
