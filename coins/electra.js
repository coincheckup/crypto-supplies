/**
 * @title Electra
 * @symbol ECA
 * @implementation Dynamic
 * @cmcId electra
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://cryptobe.com/chain/Electra/q/totalbc'
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
