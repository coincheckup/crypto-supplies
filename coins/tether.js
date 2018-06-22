/**
 * @title Tether
 * @symbol USDT
 * @implementation CoinMarketCap
 */
var request = require('request');

module.exports = (callback) => {
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
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};