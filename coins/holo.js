/**
 * @title Holo
 * @symbol HOT
 * @ethContractAddr 0x6c6ee5e31d828de241282b9606c8e98ea48526e2
 * @implementation Dynamic
 * @cmcId holo
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6c6ee5e31d828de241282b9606c8e98ea48526e2?apiKey=freekey', (error, response, body) => {
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
