/**
 * @title Cofound.it
 * @symbol CFI
 * @ethContractAddr 0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e
 * @implementation Dynamic
 * @cmcId cofound-it
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e?apiKey=freekey', (error, response, body) => {
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
