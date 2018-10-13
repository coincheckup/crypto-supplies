/**
 * @title TopChain
 * @symbol TOPC
 * @ethContractAddr 0x1b6c5864375b34af3ff5bd2e5f40bc425b4a8d79
 * @implementation Dynamic
 * @cmcId topchain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1b6c5864375b34af3ff5bd2e5f40bc425b4a8d79?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
