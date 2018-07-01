/**
 * @title Zcash
 * @symbol ZEC
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://api.zcha.in/v2/mainnet/network',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.totalAmount)
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};
