/**
* @title IHT Real Estate Protocol
* @symbol IHT
* @ethContractAddr 0xEda8B016efA8b1161208Cf041cD86972eeE0F31E
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xEda8B016efA8b1161208Cf041cD86972eeE0F31E?apiKey=freekey', (error, response, body) => {
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
