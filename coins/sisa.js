/**
 * @title SISA
 * @symbol SISA
 * @ethContractAddr 0xA0aa85b54F8A7b09C845F13a09172B08925f3d54
 * @implementation Dynamic
 * @cmcId sisa
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xA0aa85b54F8A7b09C845F13a09172B08925f3d54?apiKey=freekey', (error, response, body) => {
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
