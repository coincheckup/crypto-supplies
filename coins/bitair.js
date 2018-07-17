/**
 * @title Bitair
 * @symbol BTCA
 * @ethContractAddr 0x02725836ebf3ecdb1cdf1c7b02fcbbfaa2736af8
 * @implementation Dynamic
 * @cmcId bitair
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x02725836ebf3ecdb1cdf1c7b02fcbbfaa2736af8?apiKey=freekey', (error, response, body) => {
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
