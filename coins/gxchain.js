/**
 * @title GXChain
 * @symbol GXS
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://block.gxb.io/api/supply',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.circulating_supply),
                t: Number(body.total_supply)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
