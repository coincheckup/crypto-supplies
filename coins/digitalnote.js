/**
 * @title DigitalNote
 * @symbol XDN
 * @implementation Dynamic
 * @cmcId digitalnote
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://chainradar.com/api/v1/duck/status',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.alreadyGeneratedCoins * Math.pow(10, -8))
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};
