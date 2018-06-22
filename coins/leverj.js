/**
* @title Leverj
* @symbol LEV
* @ethContractAddr 0x0f4ca92660efad97a9a70cb0fe969c755439772c
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x0f4ca92660efad97a9a70cb0fe969c755439772c?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -9)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
