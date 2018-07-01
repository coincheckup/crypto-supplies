/**
 * @title Bitcoin Private
 * @symbol BTCP
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://explorer.btcprivate.org/api/status?q=getInfo',
        rejectUnauthorized: false,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.info.current_supply),
                m: 21000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
