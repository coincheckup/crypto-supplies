/**
* @title TokenDesk
* @symbol TDS
* @ethContractAddr 0x6295Ab2BE04A617747481B292c390BfcA592Cf28
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x6295Ab2BE04A617747481B292c390BfcA592Cf28?apiKey=freekey', (error, response, body) => {
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
