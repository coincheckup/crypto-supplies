/**
 * @title Farad
 * @symbol FRD
 * @ethContractAddr 0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4
 * @implementation Dynamic
 * @cmcId farad
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4?apiKey=freekey', (error, response, body) => {
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
