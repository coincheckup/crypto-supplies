/**
 * @title Basic Attention Token
 * @symbol BAT
 * @implementation Dynamic
 * @ethContractAddr 0x0d8775f648430679a709e98d2b0cb6250d2887ef
 * @cmcId basic-attention-token
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0x0d8775f648430679a709e98d2b0cb6250d2887ef?apiKey=freekey', (error, response, body) => {
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
