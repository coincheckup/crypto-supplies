/**
* @title Useless Ethereum Token
* @symbol UET
* @ethContractAddr 0x27f706edde3aD952EF647Dd67E24e38CD0803DD6
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x27f706edde3aD952EF647Dd67E24e38CD0803DD6?apiKey=freekey', (error, response, body) => {
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
