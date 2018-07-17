/**
 * @title Trade Token
 * @symbol TIO
 * @ethContractAddr 0x80bc5512561c7f85a3a9508c7df7901b370fa1df
 * @implementation Dynamic
 * @cmcId trade-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x80bc5512561c7f85a3a9508c7df7901b370fa1df?apiKey=freekey', (error, response, body) => {
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
