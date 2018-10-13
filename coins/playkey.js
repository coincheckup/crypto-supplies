/**
 * @title Playkey
 * @symbol PKT
 * @ethContractAddr 0x2604fa406be957e542beb89e6754fcde6815e83f
 * @implementation Dynamic
 * @cmcId playkey
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x2604fa406be957e542beb89e6754fcde6815e83f?apiKey=freekey', (error, response, body) => {
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
