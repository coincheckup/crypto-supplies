/**
 * @title Dai
 * @symbol DAI
 * @ethContractAddr 0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359
 * @implementation Dynamic
 * @cmcId dai
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359?apiKey=freekey', (error, response, body) => {
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
