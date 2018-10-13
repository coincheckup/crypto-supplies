/**
 * @title Primas
 * @symbol PST
 * @ethContractAddr 0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9
 * @implementation Dynamic
 * @cmcId primas
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9?apiKey=freekey', (error, response, body) => {
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
