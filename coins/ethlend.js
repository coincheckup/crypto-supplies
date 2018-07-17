/**
 * @title ETHLend
 * @symbol LEND
 * @ethContractAddr 0x80fB784B7eD66730e8b1DBd9820aFD29931aab03
 * @implementation Dynamic
 * @cmcId ethlend
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03?apiKey=freekey', (error, response, body) => {
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
