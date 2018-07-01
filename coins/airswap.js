/**
 * @title AirSwap
 * @symbol AST
 * @ethContractAddr 0x27054b13b1b798b345b591a4d22e6562d47ea75a
 * @implementation Dynamic
 * @cmcId airswap
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x27054b13b1b798b345b591a4d22e6562d47ea75a?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
