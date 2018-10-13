/**
 * @title Melon
 * @symbol MLN
 * @ethContractAddr 0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1
 * @implementation Dynamic
 * @cmcId melon
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1?apiKey=freekey', (error, response, body) => {
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
