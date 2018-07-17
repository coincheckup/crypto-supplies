/**
 * @title Iungo
 * @symbol ING
 * @ethContractAddr 0x24ddff6d8b8a42d835af3b440de91f3386554aa4
 * @implementation Dynamic
 * @cmcId iungo
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x24ddff6d8b8a42d835af3b440de91f3386554aa4?apiKey=freekey', (error, response, body) => {
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
