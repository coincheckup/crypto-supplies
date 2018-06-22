/**
* @title Storm
* @symbol STORM
* @ethContractAddr 0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433?apiKey=freekey', (error, response, body) => {
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
