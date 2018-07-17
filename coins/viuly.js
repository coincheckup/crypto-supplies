/**
 * @title Viuly
 * @symbol VIU
 * @ethContractAddr 0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5
 * @implementation Dynamic
 * @cmcId viuly
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5?apiKey=freekey', (error, response, body) => {
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
