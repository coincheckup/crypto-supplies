/**
 * @title ReddCoin
 * @symbol RDD
 * @implementation Dynamic
 * @cmcId reddcoin
 */

module.exports = (callback, request) => {
    request({
        uri: 'http://live.reddcoin.com/api/status?q=getInfo',
        rejectUnauthorized: false,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.info.moneysupply)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
