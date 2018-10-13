/**
 * @title Stellar
 * @symbol XLM
 * @implementation Dynamic
 * @cmcId stellar
 */

module.exports = (callback, request) => {
    request('https://dashboard.stellar.org/api/lumens', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            callback({
                c: Number(body.availableCoins),
                t: Number(body.totalCoins)
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};