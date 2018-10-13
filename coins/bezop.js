/**
 * @title Bezop
 * @symbol BEZ
 * @ethContractAddr 0x3839d8ba312751aa0248fed6a8bacb84308e20ed
 * @implementation Dynamic
 * @cmcId bezop
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x3839d8ba312751aa0248fed6a8bacb84308e20ed?apiKey=freekey', (error, response, body) => {
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
