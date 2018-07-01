/**
 * @title Game.com
 * @symbol GTC
 * @ethContractAddr 0xB70835D7822eBB9426B56543E391846C107bd32C
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0xB70835D7822eBB9426B56543E391846C107bd32C?apiKey=freekey', (error, response, body) => {
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
