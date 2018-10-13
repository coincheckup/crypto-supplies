/**
 * @title Dynamic Trading Rights
 * @symbol DTR
 * @ethContractAddr 0xd234bf2410a0009df9c3c63b610c09738f18ccd7
 * @implementation Dynamic
 * @cmcId dynamic-trading-rights
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd234bf2410a0009df9c3c63b610c09738f18ccd7?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
