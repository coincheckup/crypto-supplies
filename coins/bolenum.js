/**
 * @title Bolenum
 * @symbol BLN
 * @ethContractAddr 0xCA29db4221c111888a7e80b12eAc8a266Da3Ee0d
 * @implementation Dynamic
 * @cmcId bolenum
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xCA29db4221c111888a7e80b12eAc8a266Da3Ee0d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
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
