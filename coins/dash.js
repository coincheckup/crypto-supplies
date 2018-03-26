var request = require('request');

module.exports = (callback) => {
    request('https://chainz.cryptoid.info/dash/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                t: Number(body),
                m: 18900000
            });
        } else {
            callback(null);
        }
    });
};
