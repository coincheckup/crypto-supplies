/**
 * @title Minex
 * @symbol MINEX
 * @ethContractAddr 0x0ed74a3ecc90270d18a3b3a8eb0042a7cdd03b19
 * @implementation Dynamic
 * @cmcId minex
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0ed74a3ecc90270d18a3b3a8eb0042a7cdd03b19?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
