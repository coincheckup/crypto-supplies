/**
 * @title PolySwarm
 * @symbol NCT
 * @ethContractAddr 0x9e46a38f5daabe8683e10793b06749eef7d733d1
 * @implementation Dynamic
 * @cmcId polyswarm
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x9e46a38f5daabe8683e10793b06749eef7d733d1?apiKey=freekey', (error, response, body) => {
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
