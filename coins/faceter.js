/**
 * @title Faceter
 * @symbol FACE
 * @ethContractAddr 0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672
 * @implementation Dynamic
 * @cmcId faceter
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672?apiKey=freekey', (error, response, body) => {
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
