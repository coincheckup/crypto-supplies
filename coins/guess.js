/**
 * @title Peerguess
 * @symbol GUESS
 * @ethContractAddr 0xbdcfbf5c4d91abc0bc9709c7286d00063c0e6f22
 * @implementation Dynamic
 * @cmcId guess
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xbdcfbf5c4d91abc0bc9709c7286d00063c0e6f22?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
