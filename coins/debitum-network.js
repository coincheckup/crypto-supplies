/**
 * @title Debitum
 * @symbol DEB
 * @ethContractAddr 0x151202c9c18e495656f372281f493eb7698961d5
 * @implementation Dynamic
 * @cmcId debitum-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x151202c9c18e495656f372281f493eb7698961d5?apiKey=freekey', (error, response, body) => {
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
