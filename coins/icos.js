/**
 * @title ICOS
 * @symbol ICOS
 * @ethContractAddr 0x014b50466590340d41307cc54dcee990c8d58aa8
 * @implementation Dynamic
 * @cmcId icos
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x014b50466590340d41307cc54dcee990c8d58aa8?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
