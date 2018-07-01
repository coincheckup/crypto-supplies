/**
 * @title Burst
 * @symbol BURST
 * @implementation Dynamic
 * @cmcId burst
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://explore.burst.cryptoguru.org/api/v1/supply',
        rejectUnauthorized: false,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.data.mined),
                t: Number(body.data.mined) + Number(body.data.unmined)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
