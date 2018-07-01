/**
 * @title DECENT
 * @symbol DCT
 * @implementation Dynamic
 * @cmcId decent
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://explorerapi.decent.ch/api/statistic',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.currentSupply) * Math.pow(10, -8),
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};
