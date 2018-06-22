/**
* @title Universa
* @symbol UTNP
* @ethContractAddr 0x9e3319636e2126e3c0bc9e3134AEC5e1508A46c7
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x9e3319636e2126e3c0bc9e3134AEC5e1508A46c7?apiKey=freekey', (error, response, body) => {
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
