/**
 * @title StrikeBitClub
 * @symbol SBC
 * @implementation Dynamic
 */
 var request = require('request');

 module.exports = (callback) => {
    request({
        uri: 'https://explorer.sbccoin.io/q/getmoneysupply',
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
