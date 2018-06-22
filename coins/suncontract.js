/**
* @title SunContract
* @symbol SNC
* @ethContractAddr 0xF4134146AF2d511Dd5EA8cDB1C4AC88C57D60404
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xF4134146AF2d511Dd5EA8cDB1C4AC88C57D60404?apiKey=freekey', (error, response, body) => {
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
