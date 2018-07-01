/**
 * @title Ripple
 * @symbol XRP
 * @implementation Dynamic
 * @cmcId ripple
 */

module.exports = (callback, request) => {
    request('https://data.ripple.com/v2/ledgers', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = Number(JSON.parse(body).ledger.totalCoins) * Math.pow(10, -6);

            callback({
                c: body,
                t: 99992434971,
                m: 100000000000
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
