/**
 * @title Bulwark
 * @symbol BWK
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request('http://explorer.bulwarkcrypto.com/api/supply', (error, response, body) => {
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
