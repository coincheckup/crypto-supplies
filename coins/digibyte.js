/**
 * @title DigiByte
 * @symbol DGB
 * @implementation Dynamic
 * @cmcId digibyte
 */

module.exports = (callback, request) => {
    request('https://chainz.cryptoid.info/dgb/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                m: 21000000000
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
