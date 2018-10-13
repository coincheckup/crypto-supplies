/**
 * @title Musiconomi
 * @symbol MCI
 * @ethContractAddr 0x138a8752093f4f9a79aaedf48d4b9248fab93c9c
 * @implementation Dynamic
 * @cmcId musiconomi
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x138a8752093f4f9a79aaedf48d4b9248fab93c9c?apiKey=freekey', (error, response, body) => {
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
