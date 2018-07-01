/**
 * @title Maverick Chain
 * @symbol MVC
 * @ethContractAddr 0xb17df9a3b09583a9bdcf757d6367171476d4d8a3
 * @implementation Dynamic
 * @cmcId maverick-chain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb17df9a3b09583a9bdcf757d6367171476d4d8a3?apiKey=freekey', (error, response, body) => {
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
