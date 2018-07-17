/**
 * @title Centrality
 * @symbol CENNZ
 * @ethContractAddr 0x1122b6a0e00dce0563082b6e2953f3a943855c1f
 * @implementation Dynamic
 * @cmcId centrality
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1122b6a0e00dce0563082b6e2953f3a943855c1f?apiKey=freekey', (error, response, body) => {
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
