/**
 * @title Dogecoin
 * @symbol DOGE
 * @implementation Dynamic
 * @cmcId dogecoin
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://dogechain.info/chain/Dogecoin/q/totalbc'
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
