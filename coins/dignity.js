/**
 * @title Dignity
 * @symbol DIG
 * @ethContractAddr 0x093e5c256ff8b32c7f1377f4c20e331674c77f00
 * @implementation Dynamic
 * @cmcId dignity
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x093e5c256ff8b32c7f1377f4c20e331674c77f00?apiKey=freekey', (error, response, body) => {
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
