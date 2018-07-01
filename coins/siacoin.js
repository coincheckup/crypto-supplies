/**
 * @title Siacoin
 * @symbol SC
 * @implementation Dynamic
 * @cmcId siacoin
 */

module.exports = (callback, request) => {
    request({
        uri: 'http://explore.sia.tech/api/latest',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.totalcoins) * Math.pow(10, -24)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};