/**
 * @title Loom Network
 * @symbol LOOM
 * @ethContractAddr 0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0
 * @implementation Dynamic
 * @cmcId loom-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0?apiKey=freekey', (error, response, body) => {
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
