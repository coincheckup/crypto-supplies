/**
* @title Fluz Fluz
* @symbol FLUZ
* @ethContractAddr 0x954b5de09a55e59755acbda29e1eb74a45d30175
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x954b5de09a55e59755acbda29e1eb74a45d30175?apiKey=freekey', (error, response, body) => {
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
