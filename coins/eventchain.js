/**
* @title EventChain
* @symbol EVC
* @ethContractAddr 0xb62d18dea74045e822352ce4b3ee77319dc5ff2f
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xb62d18dea74045e822352ce4b3ee77319dc5ff2f?apiKey=freekey', (error, response, body) => {
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
