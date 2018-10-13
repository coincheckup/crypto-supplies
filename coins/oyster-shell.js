/**
 * @title Oyster Shell
 * @symbol SHL
 * @ethContractAddr 0x8542325b72c6d9fc0ad2ca965a78435413a915a0
 * @implementation Dynamic
 * @cmcId oyster-shell
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8542325b72c6d9fc0ad2ca965a78435413a915a0?apiKey=freekey', (error, response, body) => {
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
