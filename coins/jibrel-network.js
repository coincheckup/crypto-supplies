/**
* @title Jibrel Network
* @symbol JNT
* @ethContractAddr 0xa5fd1a791c4dfcaacc963d4f73c6ae5824149ea7
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xa5fd1a791c4dfcaacc963d4f73c6ae5824149ea7?apiKey=freekey', (error, response, body) => {
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
