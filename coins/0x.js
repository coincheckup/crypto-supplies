/**
 * @title 0x
 * @symbol ZRX
 * @ethContractAddr 0xe41d2489571d322189246dafa5ebde1f4699f498
 * @implementation Dynamic
 * @cmcId 0x
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe41d2489571d322189246dafa5ebde1f4699f498?apiKey=freekey', (error, response, body) => {
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
