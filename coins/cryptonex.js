/**
 * @title Cryptonex
 * @symbol CNX
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://explorer.cryptonex.org/ext/getmoneysupply',
        json: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                t: 106772751,
                m: 210000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
