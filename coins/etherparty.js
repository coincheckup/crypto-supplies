/**
* @title Etherparty
* @symbol FUEL
* @ethContractAddr 0xea38eaa3c86c8f9b751533ba2e562deb9acded40
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xea38eaa3c86c8f9b751533ba2e562deb9acded40?apiKey=freekey', (error, response, body) => {
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
