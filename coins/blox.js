/**
* @title Blox
* @symbol CDT
* @ethContractAddr 0x2fe6ab85ebbf7776fee46d191ee4cea322cecf51
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x2fe6ab85ebbf7776fee46d191ee4cea322cecf51?apiKey=freekey', (error, response, body) => {
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
