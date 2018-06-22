/**
* @title Delphy
* @symbol DPY
* @ethContractAddr 0x6c2adc2073994fb2ccc5032cc2906fa221e9b391
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x6c2adc2073994fb2ccc5032cc2906fa221e9b391?apiKey=freekey', (error, response, body) => {
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
