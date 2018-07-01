/**
 * @title Santiment Network Token
 * @symbol SAN
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: 62660371,
                t: Number(JSON.parse(body).result) * Math.pow(10, -18)
            })
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
