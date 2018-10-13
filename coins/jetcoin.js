/**
 * @title Jetcoin
 * @symbol JET
 * @ethContractAddr 0x8727c112c712c4a03371ac87a74dd6ab104af768
 * @implementation Dynamic
 * @cmcId jetcoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8727c112c712c4a03371ac87a74dd6ab104af768?apiKey=freekey', (error, response, body) => {
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
