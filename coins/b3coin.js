/**
 * @title B3Coin
 * @symbol KB3
 * @implementation Dynamic
 * @cmcId b3coin
 */

module.exports = (callback, request) => {
    request('https://chainz.cryptoid.info/b3/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
