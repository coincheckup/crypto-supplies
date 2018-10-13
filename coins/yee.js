/**
 * @title YEE
 * @symbol YEE
 * @ethContractAddr 0x922105fad8153f516bcfb829f56dc097a0e1d705
 * @implementation Dynamic
 * @cmcId yee
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x922105fad8153f516bcfb829f56dc097a0e1d705?apiKey=freekey', (error, response, body) => {
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
