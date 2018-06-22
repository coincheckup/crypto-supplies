/**
* @title Devery
* @symbol EVE
* @ethContractAddr 0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c?apiKey=freekey', (error, response, body) => {
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
