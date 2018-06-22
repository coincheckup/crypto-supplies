/**
* @title Viuly
* @symbol VIU
* @ethContractAddr 0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5?apiKey=freekey', (error, response, body) => {
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
