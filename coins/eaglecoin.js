/**
 * @title EagleCoin
 * @symbol EAGLE
 * @ethContractAddr 0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9
 * @implementation Dynamic
 * @cmcId eaglecoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9?apiKey=freekey', (error, response, body) => {
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
