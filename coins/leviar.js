/**
 * @title Leviar
 * @symbol XLC
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://api.leviar.io/supply/formatted',
        json: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = body.replace(/,/g, '');

            callback({
                c: Number(body),
                m: 54000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
