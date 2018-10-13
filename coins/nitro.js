/**
 * @title Nitro
 * @symbol NOX
 * @ethContractAddr 0xec46f8207d766012454c408de210bcbc2243e71c
 * @implementation Dynamic
 * @cmcId nitro
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xec46f8207d766012454c408de210bcbc2243e71c?apiKey=freekey', (error, response, body) => {
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
