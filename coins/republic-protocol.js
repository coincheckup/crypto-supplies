/**
 * @title Republic Protocol
 * @symbol REN
 * @ethContractAddr 0x408e41876cccdc0f92210600ef50372656052a38
 * @implementation Dynamic
 * @cmcId republic-protocol
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x408e41876cccdc0f92210600ef50372656052a38?apiKey=freekey', (error, response, body) => {
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
