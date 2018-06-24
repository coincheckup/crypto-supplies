/**
 * @title Syscoin
 * @symbol SYS
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('https://chainz.cryptoid.info/sys/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                t: Number(body),
                m: 888000000
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
