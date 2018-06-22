/**
* @title HOQU
* @symbol HQX
* @ethContractAddr 0x1b957dc4aefeed3b4a2351a6a6d5cbfbba0cecfa
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x1b957dc4aefeed3b4a2351a6a6d5cbfbba0cecfa?apiKey=freekey', (error, response, body) => {
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
