/**
* @title EOS
* @symbol EOS
* @ethContractAddr 0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
    request('http://api.ethplorer.io/getTokenInfo/0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0?apiKey=freekey', (error, response, body) => {
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
