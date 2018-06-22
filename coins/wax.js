/**
* @title WAX
* @symbol WAX
* @ethContractAddr 0x39Bb259F66E1C59d5ABEF88375979b4D20D98022
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x39Bb259F66E1C59d5ABEF88375979b4D20D98022?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
