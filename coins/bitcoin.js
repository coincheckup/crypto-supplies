/**
 * @title Bitcoin
 * @symbol BTC
 * @implementation Dynamic
 * @cmcId bitcoin
 */

module.exports = (callback, request) => {
    request('https://blockchain.info/q/totalbc', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = Number(body) / 100000000;
            // Coins burnt
            body -= 3100;
            callback({
                c: body,
                t: 21000000,
                m: 21000000
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
