/**
 * @title SaluS
 * @symbol SLS
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://cryptobe.com/chain/Salus/q/totalbc'
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
