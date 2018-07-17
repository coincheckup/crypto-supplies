/**
 * @title Blocktix
 * @symbol TIX
 * @ethContractAddr 0xea1f346faf023f974eb5adaf088bbcdf02d761f4
 * @implementation Dynamic
 * @cmcId blocktix
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xea1f346faf023f974eb5adaf088bbcdf02d761f4?apiKey=freekey', (error, response, body) => {
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
