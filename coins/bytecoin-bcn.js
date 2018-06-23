/**
 * @title Bytecoin
 * @symbol BCN
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request({
        uri: 'https://chainradar.com/api/v1/bcn/status',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.alreadyGeneratedCoins) * Math.pow(10, -8),
                m: 184470000000
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};
