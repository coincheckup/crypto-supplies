/**
 * @title I0Coin
 * @symbol I0C
 * @implementation Dynamic
 * @cmcId i0coin
 */

module.exports = (callback, request) => {
    request('https://chainz.cryptoid.info/i0c/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
