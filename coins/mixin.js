/**
 * @title Mixin
 * @symbol XIN
 * @ethContractAddr 0xa974c709cfb4566686553a20790685a47aceaa33
 * @implementation Dynamic
 * @cmcId mixin
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0xa974c709cfb4566686553a20790685a47aceaa33?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined') {
                return callback(new Error('Not Available'));
            }

            callback({
                c: Number(body.price.availableSupply),
                t: Number(body.totalSupply) * Math.pow(10, -18)
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};
