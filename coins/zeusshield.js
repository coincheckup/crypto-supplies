/**
* @title Zeusshield
* @symbol ZSC
* @ethContractAddr 0x7A41e0517a5ecA4FdbC7FbebA4D4c47B9fF6DC63
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x7A41e0517a5ecA4FdbC7FbebA4D4c47B9fF6DC63?apiKey=freekey', (error, response, body) => {
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
