/**
 * @title Hshare
 * @symbol HSR
 * @implementation Dynamic
 * @cmcId hshare
 */

module.exports = (callback, request) => {
    request({
        uri: 'http://explorer.h.cash/api/getmoneysupply',
        rejectUnauthorized: false,
        json: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                m: 84000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
