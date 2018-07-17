/**
 * @title MOAC
 * @symbol MOAC
 * @ethContractAddr 0xCBcE61316759D807c474441952cE41985bBC5a40
 * @implementation Dynamic
 * @cmcId moac
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xCBcE61316759D807c474441952cE41985bBC5a40?apiKey=freekey', (error, response, body) => {
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
