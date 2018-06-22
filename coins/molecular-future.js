/**
* @title Molecular Future
* @symbol MOF
* @ethContractAddr 0x653430560be843c4a3d143d0110e896c2ab8ac0d
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x653430560be843c4a3d143d0110e896c2ab8ac0d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -16)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
