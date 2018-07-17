/**
 * @title The Abyss
 * @symbol ABYSS
 * @ethContractAddr 0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6
 * @implementation Dynamic
 * @cmcId the-abyss
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6?apiKey=freekey', (error, response, body) => {
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
