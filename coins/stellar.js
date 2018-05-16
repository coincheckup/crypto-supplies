/**
 * @title Stellar
 * @symbol XLM
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('https://dashboard.stellar.org/api/lumens', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            callback({
                c: Number(body.availableCoins),
                t: Number(body.totalCoins)
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};