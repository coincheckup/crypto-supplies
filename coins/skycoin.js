/**
 * @title Skycoin
 * @symbol SKY
 * @implementation Dynamic
 * @cmcId skycoin
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://explorer.skycoin.net/api/coinSupply',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.current_supply),
                t: Number(body.total_supply),
                m: Number(body.max_supply)
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};
