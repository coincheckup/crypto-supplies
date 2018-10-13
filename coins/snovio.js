/**
 * @title Snovio
 * @symbol SNOV
 * @ethContractAddr 0xbdc5bac39dbe132b1e030e898ae3830017d7d969
 * @implementation Dynamic
 * @cmcId snovio
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xbdc5bac39dbe132b1e030e898ae3830017d7d969?apiKey=freekey', (error, response, body) => {
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
