/**
* @title SingularDTV
* @symbol SNGLS
* @ethContractAddr 0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
    request('http://api.ethplorer.io/getTokenInfo/0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            var resp = {
                t: body.totalSupply
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
