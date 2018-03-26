var request = require('request');

module.exports = (callback) => {
    request('http://api.etherscan.io/api?module=stats&action=ethsupply', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let supply = Number(JSON.parse(body).result) * Math.pow(10, -18);

            request('https://api.etherscan.io/api?module=account&action=balance&address=0x0000000000000000000000000000000000000000&tag=latest', (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    let burnt = Number(JSON.parse(body).result) * Math.pow(10, -18);

                    callback({
                        c: Math.round((supply - burnt) * 100) / 100
                    });
                } else {
                    callback(new Error('Request error ' + response.statusCode));
                }
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
