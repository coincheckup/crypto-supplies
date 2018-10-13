/**
 * @title Qvolta
 * @symbol QVT
 * @ethContractAddr 0x1183f92a5624d68e85ffb9170f16bf0443b4c242
 * @implementation Dynamic
 * @cmcId qvolta
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1183f92a5624d68e85ffb9170f16bf0443b4c242?apiKey=freekey', (error, response, body) => {
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
