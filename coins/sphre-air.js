/**
* @title Sphre AIR
* @symbol XID
* @ethContractAddr 0xb110ec7b1dcb8fab8dedbf28f53bc63ea5bedd84
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xb110ec7b1dcb8fab8dedbf28f53bc63ea5bedd84?apiKey=freekey', (error, response, body) => {
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
