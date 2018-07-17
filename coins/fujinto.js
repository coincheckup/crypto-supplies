/**
 * @title Fujinto
 * @symbol NTO
 * @ethContractAddr 0x8a99ed8a1b204903ee46e733f2c1286f6d20b177
 * @implementation Dynamic
 * @cmcId fujinto
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8a99ed8a1b204903ee46e733f2c1286f6d20b177?apiKey=freekey', (error, response, body) => {
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
