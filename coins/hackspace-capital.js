/**
* @title Hackspace Capital
* @symbol HAC
* @ethContractAddr 0x43567eb78638A55bbE51E9f9FB5B2D7AD1F125aa
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x43567eb78638A55bbE51E9f9FB5B2D7AD1F125aa?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
