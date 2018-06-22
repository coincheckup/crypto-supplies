/**
* @title UnlimitedIP
* @symbol UIP
* @ethContractAddr 0x4290563c2d7c255b5eec87f2d3bd10389f991d68
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x4290563c2d7c255b5eec87f2d3bd10389f991d68?apiKey=freekey', (error, response, body) => {
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
