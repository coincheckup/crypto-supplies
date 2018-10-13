/**
 * @title Dether
 * @symbol DTH
 * @ethContractAddr 0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190
 * @implementation Dynamic
 * @cmcId dether
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190?apiKey=freekey', (error, response, body) => {
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
