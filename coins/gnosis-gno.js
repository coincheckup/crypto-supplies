/**
 * @title Gnosis
 * @symbol GNO
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x6810e776880c02933d47db1b9fc05908e5386b96', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: 1104590,
                t: Number(JSON.parse(body).result) * Math.pow(10, -18)
            })
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
