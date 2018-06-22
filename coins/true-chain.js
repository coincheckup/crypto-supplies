/**
* @title True Chain
* @symbol TRUE
* @ethContractAddr 0xA4d17AB1eE0efDD23edc2869E7BA96B89eEcf9AB
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xA4d17AB1eE0efDD23edc2869E7BA96B89eEcf9AB?apiKey=freekey', (error, response, body) => {
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
