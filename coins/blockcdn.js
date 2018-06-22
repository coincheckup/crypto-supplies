/**
* @title BlockCDN
* @symbol BCDN
* @ethContractAddr 0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -15)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
