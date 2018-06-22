/**
* @title Embers
* @symbol MBRS
* @ethContractAddr 0x386467f1f3ddbe832448650418311a479eecfc57
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x386467f1f3ddbe832448650418311a479eecfc57?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
