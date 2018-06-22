/**
* @title Elixir
* @symbol ELIX
* @ethContractAddr 0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8?apiKey=freekey', (error, response, body) => {
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
