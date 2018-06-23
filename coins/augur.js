/**
* @title Augur
* @symbol REP
* @ethContractAddr 0xe94327d07fc17907b4db788e5adf2ed424addff6
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xe94327d07fc17907b4db788e5adf2ed424addff6?apiKey=freekey', (error, response, body) => {
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
