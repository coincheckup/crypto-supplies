/**
 * @title NEVERDIE
 * @symbol NDC
 * @ethContractAddr 0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970
 * @implementation Dynamic
 * @cmcId neverdie
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970?apiKey=freekey', (error, response, body) => {
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
