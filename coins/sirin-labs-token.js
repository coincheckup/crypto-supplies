/**
* @title SIRIN LABS Token
* @symbol SRN
* @ethContractAddr 0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25?apiKey=freekey', (error, response, body) => {
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
