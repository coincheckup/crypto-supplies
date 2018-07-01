/**
 * @title 8Bit
 * @symbol 8BIT
 * @implementation Dynamic
 * @cmcId 8bit
 */

module.exports = (callback, request) => {
    request('https://chainz.cryptoid.info/8bit/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
