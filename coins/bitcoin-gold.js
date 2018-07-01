/**
 * @title Bitcoin Gold
 * @symbol BTG
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://btgexp.com/ext/getmoneysupply',
        rejectUnauthorized: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                t: Number(body),
                m: 21000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
