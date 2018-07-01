/**
 * @title TokenPay
 * @symbol TPAY
 * @implementation Dynamic
 */
 
 module.exports = (callback, request) => {
    request({
        uri: 'https://explorer.tpay.ai/ext/getmoneysupply',
        rejectUnauthorized: false,
        json: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                m: 25000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
 };
