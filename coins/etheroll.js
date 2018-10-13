/**
 * @title Etheroll
 * @symbol DICE
 * @ethContractAddr 0x2e071D2966Aa7D8dECB1005885bA1977D6038A65
 * @implementation Dynamic
 * @cmcId etheroll
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x2e071D2966Aa7D8dECB1005885bA1977D6038A65?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -16)
        };

        if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
            resp.c = Number(body.price.availableSupply);
        }

        callback(resp);
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
