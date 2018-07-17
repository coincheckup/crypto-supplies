/**
 * @title Commodity Ad Network
 * @symbol CDX
 * @ethContractAddr 0x6fff3806bbac52a20e0d79bc538d527f6a22c96b
 * @implementation Dynamic
 * @cmcId commodity-ad-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6fff3806bbac52a20e0d79bc538d527f6a22c96b?apiKey=freekey', (error, response, body) => {
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
