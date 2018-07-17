/**
 * @title BrahmaOS
 * @symbol BRM
 * @ethContractAddr 0xD7732e3783b0047aa251928960063f863AD022D8
 * @implementation Dynamic
 * @cmcId brahmaos
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xD7732e3783b0047aa251928960063f863AD022D8?apiKey=freekey', (error, response, body) => {
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
