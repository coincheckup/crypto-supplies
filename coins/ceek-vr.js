/**
 * @title CEEK VR
 * @symbol CEEK
 * @ethContractAddr 0xb056c38f6b7dc4064367403e26424cd2c60655e1
 * @implementation Dynamic
 * @cmcId ceek-vr
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb056c38f6b7dc4064367403e26424cd2c60655e1?apiKey=freekey', (error, response, body) => {
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
