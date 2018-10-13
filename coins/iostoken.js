/**
 * @title IOStoken
 * @symbol IOST
 * @ethContractAddr 0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab
 * @implementation Dynamic
 * @cmcId iostoken
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab?apiKey=freekey', (error, response, body) => {
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
