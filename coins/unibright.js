/**
 * @title Unibright
 * @symbol UBT
 * @ethContractAddr 0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e
 * @implementation Dynamic
 * @cmcId unibright
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
