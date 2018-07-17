/**
 * @title ugChain
 * @symbol UGC
 * @ethContractAddr 0xf485c5e679238f9304d986bb2fc28fe3379200e5
 * @implementation Dynamic
 * @cmcId ugchain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf485c5e679238f9304d986bb2fc28fe3379200e5?apiKey=freekey', (error, response, body) => {
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
