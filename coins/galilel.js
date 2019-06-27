/**
 * @title Galilel
 * @symbol GALI
 * @implementation Dynamic
 * @cmcId galilel
 */

module.exports = (callback, request) => {
    request('https://explorer.galilel.org/api/supply', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let res = JSON.parse(body);
            callback({
              c: Number(res.c),
              t: Number(res.t)
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
