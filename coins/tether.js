/**
 * @title Tether
 * @symbol USDT
 * @implementation CoinMarketCap
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://api.coinmarketcap.com/v2/ticker/825/',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.data.circulating_supply),
                t: Number(body.data.total_supply)
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};