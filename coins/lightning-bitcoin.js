/**
 * @title Lightning Bitcoin
 * @symbol LBTC
 * @implementation Dynamic
 * @cmcId lightning-bitcoin
 */

module.exports = (callback, request) => {
    request('http://api.lbtc.io/totallbtc', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            circle = Number(JSON.parse(body).c);
            total = Number(JSON.parse(body).t);
            // Coins burnt
            callback({
                c: circle,
                t: total
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};

