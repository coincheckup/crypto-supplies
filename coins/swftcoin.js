/**
 * @title SwftCoin
 * @symbol SWFTC
 * @ethContractAddr 0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e
 * @implementation Dynamic
 * @cmcId swftcoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
