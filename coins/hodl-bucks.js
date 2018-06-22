/**
* @title HODL Bucks
* @symbol HDLB
* @ethContractAddr 0xad6714bd97cbbd29788f8838bc865ee71b843eb8
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xad6714bd97cbbd29788f8838bc865ee71b843eb8?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
