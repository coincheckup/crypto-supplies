/**
 * @title Decred
 * @symbol DCR
 * @implementation Dynamic
 * @cmcId decred
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://explorer.dcrdata.org/api/supply',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.supply_mined) * Math.pow(10, -8),
                t: Number(body.supply_ultimate) * Math.pow(10, -8)
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};
