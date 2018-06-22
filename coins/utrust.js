/**
* @title UTRUST
* @symbol UTK
* @ethContractAddr 0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38?apiKey=freekey', (error, response, body) => {
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
