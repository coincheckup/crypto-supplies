/**
 * @title Dogecoin
 * @symbol DOGE
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request({
        uri: 'https://dogechain.info/chain/Dogecoin/q/totalbc'
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
