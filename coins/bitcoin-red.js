/**
* @title Bitcoin Red
* @symbol BTCRED
* @ethContractAddr 0x6aac8cb9861e42bf8259f5abdc6ae3ae89909e11
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x6aac8cb9861e42bf8259f5abdc6ae3ae89909e11?apiKey=freekey', (error, response, body) => {
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
