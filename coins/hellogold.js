/**
 * @title HelloGold
 * @symbol HGT
 * @ethContractAddr 0xba2184520a1cc49a6159c57e61e1844e085615b6
 * @implementation Dynamic
 * @cmcId hellogold
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xba2184520a1cc49a6159c57e61e1844e085615b6?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
