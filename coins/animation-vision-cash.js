/**
* @title Animation Vision Cash
* @symbol AVH
* @ethContractAddr 0xd7cddd45629934c2f6ed3b63217bd8085d7c14a8
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xd7cddd45629934c2f6ed3b63217bd8085d7c14a8?apiKey=freekey', (error, response, body) => {
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
