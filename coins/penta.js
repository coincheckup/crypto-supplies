/**
* @title Penta
* @symbol PNT
* @ethContractAddr 0x53066cddbc0099eb6c96785d9b3df2aaeede5da3
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x53066cddbc0099eb6c96785d9b3df2aaeede5da3?apiKey=freekey', (error, response, body) => {
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
