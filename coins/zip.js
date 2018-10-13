/**
 * @title ZIP
 * @symbol ZIP
 * @ethContractAddr 0xa9d2927d3a04309e008b6af6e2e282ae2952e7fd
 * @implementation Dynamic
 * @cmcId zip
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa9d2927d3a04309e008b6af6e2e282ae2952e7fd?apiKey=freekey', (error, response, body) => {
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
