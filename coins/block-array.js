/**
 * @title Block Array
 * @symbol ARY
 * @ethContractAddr 0xa5f8fc0921880cb7342368bd128eb8050442b1a1
 * @implementation Dynamic
 * @cmcId block-array
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa5f8fc0921880cb7342368bd128eb8050442b1a1?apiKey=freekey', (error, response, body) => {
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
