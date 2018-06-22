/**
* @title Senderon
* @symbol SDRN
* @ethContractAddr 0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7?apiKey=freekey', (error, response, body) => {
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
