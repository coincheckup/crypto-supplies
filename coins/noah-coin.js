/**
 * @title Noah Coin
 * @symbol NOAH
 * @ethContractAddr 0x58a4884182d9e835597f405e5f258290e46ae7c2
 * @implementation Dynamic
 * @cmcId noah-coin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x58a4884182d9e835597f405e5f258290e46ae7c2?apiKey=freekey', (error, response, body) => {
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
