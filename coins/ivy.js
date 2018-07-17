/**
 * @title Ivy
 * @symbol IVY
 * @ethContractAddr 0xa4ea687a2a7f29cf2dc66b39c68e4411c0d00c49
 * @implementation Dynamic
 * @cmcId ivy
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa4ea687a2a7f29cf2dc66b39c68e4411c0d00c49?apiKey=freekey', (error, response, body) => {
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
