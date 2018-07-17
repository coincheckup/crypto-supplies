/**
 * @title EventChain
 * @symbol EVC
 * @ethContractAddr 0xb62d18dea74045e822352ce4b3ee77319dc5ff2f
 * @implementation Dynamic
 * @cmcId eventchain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb62d18dea74045e822352ce4b3ee77319dc5ff2f?apiKey=freekey', (error, response, body) => {
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
