/**
 * @title Aeron
 * @symbol ARN
 * @ethContractAddr 0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6
 * @implementation Dynamic
 * @cmcId aeron
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6?apiKey=freekey', (error, response, body) => {
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
