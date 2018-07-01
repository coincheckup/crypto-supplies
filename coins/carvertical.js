/**
 * @title carVertical
 * @symbol CV
 * @ethContractAddr 0xda6cb58a0d0c01610a29c5a65c303e13e885887c
 * @implementation Dynamic
 * @cmcId carvertical
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xda6cb58a0d0c01610a29c5a65c303e13e885887c?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -18)
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
