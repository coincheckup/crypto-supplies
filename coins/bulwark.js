var request = require('request');

module.exports = (callback) => {
    request('http://explorer.bulwarkcrypto.com/api/supply', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let res = JSON.parse(body);
            callback({
              c: Number(res.c),
              t: Number(res.t)
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
