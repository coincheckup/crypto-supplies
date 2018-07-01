/**
 * @title Swing
 * @symbol SWING
 * @implementation Dynamic
 * @cmcId swing
 */

module.exports = (callback, request) => {
    request('https://chainz.cryptoid.info/swing/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
