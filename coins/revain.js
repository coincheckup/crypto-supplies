/**
 * @title Revain
 * @symbol R
 * @ethContractAddr 0x48f775efbe4f5ece6e0df2f7b5932df56823b990
 * @implementation Dynamic
 * @cmcId revain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x48f775efbe4f5ece6e0df2f7b5932df56823b990?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
