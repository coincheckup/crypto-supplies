/**
 * @title Litecoin
 * @symbol LTC
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('https://chainz.cryptoid.info/ltc/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                t: Number(body),
                m: 84000000
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
