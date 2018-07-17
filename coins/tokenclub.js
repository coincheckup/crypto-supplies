/**
 * @title TokenClub
 * @symbol TCT
 * @ethContractAddr 0x4824a7b64e3966b0133f4f4ffb1b9d6beb75fff7
 * @implementation Dynamic
 * @cmcId tokenclub
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4824a7b64e3966b0133f4f4ffb1b9d6beb75fff7?apiKey=freekey', (error, response, body) => {
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
