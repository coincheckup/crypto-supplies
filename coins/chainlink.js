/**
 * @title ChainLink
 * @symbol LINK
 * @ethContractAddr 0x514910771af9ca656af840dff83e8264ecf986ca
 * @implementation Dynamic
 * @cmcId chainlink
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x514910771af9ca656af840dff83e8264ecf986ca?apiKey=freekey', (error, response, body) => {
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
