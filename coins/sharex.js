/**
 * @title ShareX
 * @symbol SEXC
 * @ethContractAddr 0x2567c677473d110d75a8360c35309e63b1d52429
 * @implementation Dynamic
 * @cmcId sharex
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x2567c677473d110d75a8360c35309e63b1d52429?apiKey=freekey', (error, response, body) => {
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
