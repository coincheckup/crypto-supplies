/**
 * @title BelugaPay
 * @symbol BBI
 * @ethContractAddr 0x37d40510a2f5bc98aa7a0f7bf4b3453bcfb90ac1
 * @implementation Dynamic
 * @cmcId belugapay
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x37d40510a2f5bc98aa7a0f7bf4b3453bcfb90ac1?apiKey=freekey', (error, response, body) => {
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
