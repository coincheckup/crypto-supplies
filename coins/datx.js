/**
 * @title DATx
 * @symbol DATX
 * @ethContractAddr 0xabbbb6447b68ffd6141da77c18c7b5876ed6c5ab
 * @implementation Dynamic
 * @cmcId datx
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xabbbb6447b68ffd6141da77c18c7b5876ed6c5ab?apiKey=freekey', (error, response, body) => {
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
