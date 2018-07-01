/**
 * @title Exchange Union
 * @symbol XUC
 * @ethContractAddr 0xc324a2f6b05880503444451b8b27e6f9e63287cb
 * @implementation Dynamic
 * @cmcId exchange-union
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xc324a2f6b05880503444451b8b27e6f9e63287cb?apiKey=freekey', (error, response, body) => {
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
