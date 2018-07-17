/**
 * @title Matrix AI Network
 * @symbol MAN
 * @ethContractAddr 0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d
 * @implementation Dynamic
 * @cmcId matrix-ai-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d?apiKey=freekey', (error, response, body) => {
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
