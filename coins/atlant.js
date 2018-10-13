/**
 * @title ATLANT
 * @symbol ATL
 * @ethContractAddr 0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05
 * @implementation Dynamic
 * @cmcId atlant
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05?apiKey=freekey', (error, response, body) => {
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
