/**
 * @title Aeon
 * @symbol AEON
 * @implementation Dynamic
 * @cmcId aeon
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://chainradar.com/api/v1/aeon/status',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.alreadyGeneratedCoins) * Math.pow(10, -9),
                m: 184470000000
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};
