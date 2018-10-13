/**
 * @title 42-coin
 * @symbol 42
 * @implementation Dynamic
 * @cmcId 42-coin
 */

module.exports = (callback, request) => {
    request('https://chainz.cryptoid.info/42/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
