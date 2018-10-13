/**
 * @title Refereum
 * @symbol RFR
 * @ethContractAddr 0xd0929d411954c47438dc1d871dd6081f5c5e149c
 * @implementation Dynamic
 * @cmcId refereum
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd0929d411954c47438dc1d871dd6081f5c5e149c?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
