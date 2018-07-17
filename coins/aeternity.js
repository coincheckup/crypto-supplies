/**
 * @title Aeternity
 * @symbol AE
 * @ethContractAddr 0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d
 * @implementation Dynamic
 * @cmcId aeternity
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d?apiKey=freekey', (error, response, body) => {
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
