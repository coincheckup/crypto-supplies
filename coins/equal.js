/**
 * @title Equal
 * @symbol EQL
 * @ethContractAddr 0x47dd62d4d075dead71d0e00299fc56a2d747bebb
 * @implementation Dynamic
 * @cmcId equal
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x47dd62d4d075dead71d0e00299fc56a2d747bebb?apiKey=freekey', (error, response, body) => {
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
