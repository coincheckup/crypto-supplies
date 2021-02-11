/**
 * @title Verge
 * @symbol XVG
 * @implementation Dynamic
 * @cmcId verge
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://verge-blockchain.info/api/moneysupply',
        rejectUnauthorized: false,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.data.moneysupply),
                m: 16555000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
