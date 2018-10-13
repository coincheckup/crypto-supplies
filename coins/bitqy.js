/**
 * @title bitqy
 * @symbol BQ
 * @ethContractAddr 0xf0f8b0b8dbb1124261fc8d778e2287e3fd2cf4f5
 * @implementation Dynamic
 * @cmcId bitqy
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf0f8b0b8dbb1124261fc8d778e2287e3fd2cf4f5?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -3)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
