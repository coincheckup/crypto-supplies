/**
 * @title Seele
 * @symbol SEELE
 * @ethContractAddr 0xb1eef147028e9f480dbc5ccaa3277d417d1b85f0
 * @implementation Dynamic
 * @cmcId seele
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb1eef147028e9f480dbc5ccaa3277d417d1b85f0?apiKey=freekey', (error, response, body) => {
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
