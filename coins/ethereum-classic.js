/**
 * @title Ethereum Classic
 * @symbol ETC
 * @implementation Dynamic
 * @cmcId ethereum-classic
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://etcchain.com/api/v1/getIndex',
        json: true,
        rejectUnauthorized: false,
        requestCert: true
    }, (error, response, body) => {
        try {
            if (!error && response.statusCode == 200) {
                callback({
                    c: Number(body.etc.available_supply)
                })
            } else {
                if (typeof response !== 'undefined') {
                    callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
                } else {
                    callback(new Error('Request error ' + error.message));
                }
            }
        } catch (e) {
            callback(new Error('Request error ' + e.message));
        }
    });
};
