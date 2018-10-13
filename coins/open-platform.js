/**
 * @title Open Platform
 * @symbol OPEN
 * @ethContractAddr 0x69c4BB240cF05D51eeab6985Bab35527d04a8C64
 * @implementation Dynamic
 * @cmcId open-platform
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x69c4BB240cF05D51eeab6985Bab35527d04a8C64?apiKey=freekey', (error, response, body) => {
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
