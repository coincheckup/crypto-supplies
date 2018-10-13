/**
 * @title Nuls
 * @symbol NULS
 * @ethContractAddr 0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c
 * @implementation Dynamic
 * @cmcId nuls
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c?apiKey=freekey', (error, response, body) => {
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
