/**
 * @title KuCoin Shares
 * @symbol KCS
 * @ethContractAddr 0x039b5649a59967e3e936d7471f9c3700100ee1ab
 * @implementation Dynamic
 * @cmcId kucoin-shares
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x039b5649a59967e3e936d7471f9c3700100ee1ab?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
