/**
 * @title KEY
 * @symbol KEY
 * @ethContractAddr 0x4cd988afbad37289baaf53c13e98e2bd46aaea8c
 * @implementation Dynamic
 * @cmcId key
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4cd988afbad37289baaf53c13e98e2bd46aaea8c?apiKey=freekey', (error, response, body) => {
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
