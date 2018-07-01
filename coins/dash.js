/**
 * @title Dash
 * @symbol DASH
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request('https://chainz.cryptoid.info/dash/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                t: Number(body),
                m: 18900000
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
