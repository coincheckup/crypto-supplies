/**
 * @title Datarius Credit
 * @symbol DTRC
 * @ethContractAddr 0xc20464e0c373486d2b3335576e83a218b1618a5e
 * @implementation Dynamic
 * @cmcId datarius-credit
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xc20464e0c373486d2b3335576e83a218b1618a5e?apiKey=freekey', (error, response, body) => {
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
