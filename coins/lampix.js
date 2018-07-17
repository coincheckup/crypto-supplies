/**
 * @title Lampix
 * @symbol PIX
 * @ethContractAddr 0x8eFFd494eB698cc399AF6231fCcd39E08fd20B15
 * @implementation Dynamic
 * @cmcId lampix
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8eFFd494eB698cc399AF6231fCcd39E08fd20B15?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
