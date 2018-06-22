/**
 * @title Qtum
 * @symbol QTUM
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request({
        uri: 'https://explorer.qtum.org/insight-api/statistics/total-supply?format=plain',
        json: true
    }, (error, response, totalSupply) => {
        if (!error && response.statusCode == 200) {
            request({
                uri: 'https://explorer.qtum.org/insight-api/markets/info',
                json: true
            }, (error, response, marketData) => {
                if (!error && response.statusCode == 200) {
                    callback({
                        c: Number(marketData.available_supply),
                        t: Number(totalSupply)
                    })
                } else {
                    callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
                }
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error.message));
        }
    });
};
