/**
 * @title StrikeBitClub
 * @symbol SBC
 * @implementation Dynamic
 */
 
 module.exports = (callback, request) => {
    request({
        uri: 'https://explorer.sbccoin.io/q/getmoneysupply',
        rejectUnauthorized: false,
        json: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
 };
