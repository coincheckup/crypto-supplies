/**
 * @title Ethorse
 * @symbol HORSE
 * @ethContractAddr 0x5b0751713b2527d7f002c0c4e2a37e1219610a6b
 * @implementation Dynamic
 * @cmcId ethorse
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5b0751713b2527d7f002c0c4e2a37e1219610a6b?apiKey=freekey', (error, response, body) => {
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
