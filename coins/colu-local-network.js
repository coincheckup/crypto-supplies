/**
 * @title Colu Local Network
 * @symbol CLN
 * @ethContractAddr 0x4162178b78d6985480a308b2190ee5517460406d
 * @implementation Dynamic
 * @cmcId colu-local-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4162178b78d6985480a308b2190ee5517460406d?apiKey=freekey', (error, response, body) => {
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
