/**
 * @title Fluz Fluz
 * @symbol FLUZ
 * @ethContractAddr 0x954b5de09a55e59755acbda29e1eb74a45d30175
 * @implementation Dynamic
 * @cmcId fluz-fluz
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x954b5de09a55e59755acbda29e1eb74a45d30175?apiKey=freekey', (error, response, body) => {
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
