/**
 * @title Credo
 * @symbol CREDO
 * @ethContractAddr 0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be
 * @implementation Dynamic
 * @cmcId credo
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
