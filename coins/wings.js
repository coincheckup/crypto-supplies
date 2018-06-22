/**
* @title Wings
* @symbol WINGS
* @ethContractAddr 0x667088b212ce3d06a1b553a7221E1fD19000d9aF
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x667088b212ce3d06a1b553a7221E1fD19000d9aF?apiKey=freekey', (error, response, body) => {
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
