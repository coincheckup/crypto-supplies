/**
* @title Hurify
* @symbol HUR
* @ethContractAddr 0xcdb7ecfd3403eef3882c65b761ef9b5054890a47
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xcdb7ecfd3403eef3882c65b761ef9b5054890a47?apiKey=freekey', (error, response, body) => {
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
