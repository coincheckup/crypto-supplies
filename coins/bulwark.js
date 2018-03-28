var request = require('request');

module.exports = (callback) => {
    request('http://explorer.bulwarkcrypto.com/ext/getmoneysupply', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
