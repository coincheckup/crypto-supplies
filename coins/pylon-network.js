/**
* @title Pylon Network
* @symbol PYLNT
* @ethContractAddr 0x7703C35CfFdC5CDa8D27aa3df2F9ba6964544b6e
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x7703C35CfFdC5CDa8D27aa3df2F9ba6964544b6e?apiKey=freekey', (error, response, body) => {
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
