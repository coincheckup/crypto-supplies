/**
 * @title Astro
 * @symbol ASTRO
 * @ethContractAddr 0x7b22938ca841aa392c93dbb7f4c42178e3d65e88
 * @implementation Dynamic
 * @cmcId astro
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x7b22938ca841aa392c93dbb7f4c42178e3d65e88?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
