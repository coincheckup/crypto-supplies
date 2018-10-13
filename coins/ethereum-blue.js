/**
 * @title Blue Protocol
 * @symbol BLUE
 * @ethContractAddr 0x539efe69bcdd21a83efd9122571a64cc25e0282b
 * @implementation Dynamic
 * @cmcId ethereum-blue
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x539efe69bcdd21a83efd9122571a64cc25e0282b?apiKey=freekey', (error, response, body) => {
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
