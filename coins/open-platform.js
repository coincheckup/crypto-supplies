/**
* @title Open Platform
* @symbol OPEN
* @ethContractAddr 0x69c4BB240cF05D51eeab6985Bab35527d04a8C64
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x69c4BB240cF05D51eeab6985Bab35527d04a8C64?apiKey=freekey', (error, response, body) => {
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
