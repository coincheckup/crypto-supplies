/**
 * @title COPYTRACK
 * @symbol CPY
 * @ethContractAddr 0xf44745fbd41f6a1ba151df190db0564c5fcc4410
 * @implementation Dynamic
 * @cmcId copytrack
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf44745fbd41f6a1ba151df190db0564c5fcc4410?apiKey=freekey', (error, response, body) => {
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
