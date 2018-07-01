/**
 * @title Enigma
 * @symbol ENG
 * @ethContractAddr 0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4
 * @implementation Dynamic
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4?apiKey=freekey', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            var resp = {
                t: Number(body.totalSupply) * Math.pow(10, -8)
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
