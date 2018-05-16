/**
 * @title TRON
 * @symbol TRX
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xf230b790e05390fc8295f4d3f60332c93bed42e2', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: 65748111645,
                t: Number(JSON.parse(body).result) * Math.pow(10, -6)
            })
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
