/**
 * @title Emercoin
 * @symbol EMC
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request({
        uri: 'https://explorer.emercoin.com/api/stats/coin_supply',
        rejectUnauthorized: false,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.coin_supply)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
