/**
 * @title StarterCoin
 * @symbol STAC
 * @ethContractAddr 0x9a005c9a89bd72a4bd27721e7a09a3c11d2b03c4
 * @implementation Dynamic
 * @cmcId startercoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x9a005c9a89bd72a4bd27721e7a09a3c11d2b03c4?apiKey=freekey', (error, response, body) => {
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
