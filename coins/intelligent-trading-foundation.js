/**
* @title Intelligent Trading Foundation
* @symbol ITT
* @ethContractAddr 0x0aef06dcccc531e581f0440059e6ffcc206039ee
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x0aef06dcccc531e581f0440059e6ffcc206039ee?apiKey=freekey', (error, response, body) => {
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
