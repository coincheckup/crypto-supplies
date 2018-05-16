/**
 * @title Lightning Bitcoin
 * @symbol LBTC
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('http://api.lbtc.io/totallbtc', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            circle = Number(JSON.parse(body).c);
            total = Number(JSON.parse(body).t);
            // Coins burnt
            callback({
                c: circle,
                t: total
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};

