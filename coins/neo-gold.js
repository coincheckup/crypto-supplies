/**
 * @title NEO GOLD
 * @symbol NEOG
 * @ethContractAddr 0x449574c69f3a658794829ed81639a7a9ece041e1
 * @implementation Dynamic
 * @cmcId neo-gold
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x449574c69f3a658794829ed81639a7a9ece041e1?apiKey=freekey', (error, response, body) => {
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
