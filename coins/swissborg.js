/**
 * @title SwissBorg
 * @symbol CHSB
 * @ethContractAddr 0xba9d4199fab4f26efe3551d490e3821486f135ba
 * @implementation Dynamic
 * @cmcId swissborg
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xba9d4199fab4f26efe3551d490e3821486f135ba?apiKey=freekey', (error, response, body) => {
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
