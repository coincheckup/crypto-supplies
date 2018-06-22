/**
* @title Crowd Machine
* @symbol CMCT
* @ethContractAddr 0x47bc01597798dcd7506dcca36ac4302fc93a8cfb
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x47bc01597798dcd7506dcca36ac4302fc93a8cfb?apiKey=freekey', (error, response, body) => {
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
