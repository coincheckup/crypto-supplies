/**
 * @title Sumcoin
 * @symbol SUM
 * @implementation Dynamic
 * @cmcId sumcoin
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://sumexplorer.com/ext/getmoneysupply',
        rejectUnauthorized: false
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body),
                t: Number(body),
                m: 100000000
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
