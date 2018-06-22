/**
* @title Chronologic
* @symbol DAY
* @ethContractAddr 0xE814aeE960a85208C3dB542C53E7D4a6C8D5f60F
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xE814aeE960a85208C3dB542C53E7D4a6C8D5f60F?apiKey=freekey', (error, response, body) => {
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
