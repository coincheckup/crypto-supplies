/**
 * @title USD Coin
 * @symbol USDC
 * @ethContractAddr 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
 * @implementation Dynamic
 * @cmcId usdcoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48?apiKey=freekey', (error, response, body) => {
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
