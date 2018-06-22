/**
* @title Cofound.it
* @symbol CFI
* @ethContractAddr 0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e?apiKey=freekey', (error, response, body) => {
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
