/**
 * @title Monero
 * @symbol XMR
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('http://moneroblocks.info/api/get_stats/', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let supply = Number(JSON.parse(body).total_emission) * Math.pow(10, -12);

            callback({
                c: Math.round(supply * 100) / 100
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
