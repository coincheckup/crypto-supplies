/**
 * @title Bitcoin
 * @symbol BTC
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('https://blockchain.info/q/totalbc', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = Number(body) / 100000000;
            // Coins burnt
            body -= 3100;
            callback({
                c: body,
                t: 21000000
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
