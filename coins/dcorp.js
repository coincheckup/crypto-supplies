/**
* @title DCORP
* @symbol DRP
* @ethContractAddr 0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
