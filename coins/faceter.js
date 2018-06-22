/**
* @title Faceter
* @symbol FACE
* @ethContractAddr 0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672?apiKey=freekey', (error, response, body) => {
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
