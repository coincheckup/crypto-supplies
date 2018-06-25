/**
 * @title GINcoin
 * @symbol GIN
 * @implementation Dynamic
 */
 var request = require('request');

 module.exports = (callback) => {
    request({
        uri: 'https://explorer.gincoin.io/ext/getmoneysupply',
        rejectUnauthorized: false,
        json: false
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
