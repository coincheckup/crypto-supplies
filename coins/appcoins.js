/**
 * @title AppCoins
 * @symbol APPC
 * @ethContractAddr 0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db
 * @implementation Dynamic
 * @cmcId appcoins
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
