/**
 * @title Quantstamp
 * @symbol QSP
 * @ethContractAddr 0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d
 * @implementation Dynamic
 * @cmcId quantstamp
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d?apiKey=freekey', (error, response, body) => {
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
