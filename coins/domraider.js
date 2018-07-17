/**
 * @title DomRaider
 * @symbol DRT
 * @ethContractAddr 0x9af4f26941677c706cfecf6d3379ff01bb85d5ab
 * @implementation Dynamic
 * @cmcId domraider
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x9af4f26941677c706cfecf6d3379ff01bb85d5ab?apiKey=freekey', (error, response, body) => {
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
