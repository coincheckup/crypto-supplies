/**
 * @title Wi Coin
 * @symbol WIC
 * @ethContractAddr 0x5e4abe6419650ca839ce5bb7db422b881a6064bb
 * @implementation Dynamic
 * @cmcId wi-coin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5e4abe6419650ca839ce5bb7db422b881a6064bb?apiKey=freekey', (error, response, body) => {
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
