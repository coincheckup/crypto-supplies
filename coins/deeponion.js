/**
 * @title DeepOnion
 * @symbol ONION
 * @implementation Dynamic
 * @cmcId deeponion
 */

module.exports = (callback, request) => {
    request({
        uri: 'http://explorer.deeponion.org/ext/getmoneysupply',
        rejectUnauthorized: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                t: Number(body)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
