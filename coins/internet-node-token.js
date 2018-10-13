/**
 * @title Internet Node Token
 * @symbol INT
 * @ethContractAddr 0x0b76544f6c413a555f309bf76260d1e02377c02a
 * @implementation Dynamic
 * @cmcId internet-node-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0b76544f6c413a555f309bf76260d1e02377c02a?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
