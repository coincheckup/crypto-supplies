/**
 * @title RChain
 * @symbol RHOC
 * @ethContractAddr 0x168296bb09e24a88805cb9c33356536b980d3fc5
 * @implementation Dynamic
 * @cmcId rchain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x168296bb09e24a88805cb9c33356536b980d3fc5?apiKey=freekey', (error, response, body) => {
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
