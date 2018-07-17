/**
 * @title MicroMoney
 * @symbol AMM
 * @ethContractAddr 0x8b1f49491477e0fb46a29fef53f1ea320d13c349
 * @implementation Dynamic
 * @cmcId micromoney
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8b1f49491477e0fb46a29fef53f1ea320d13c349?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
