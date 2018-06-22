/**
* @title Status
* @symbol SNT
* @ethContractAddr 0x744d70fdbe2ba4cf95131626614a1763df805b9e
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x744d70fdbe2ba4cf95131626614a1763df805b9e?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -18)
        };

        if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
            resp.c = Number(body.price.availableSupply);
        }

        callback(resp);
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
