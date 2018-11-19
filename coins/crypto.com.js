/**
 * @title crypto.com
 * @symbol MCO
 * @ethContractAddr 0xb63b606ac810a52cca15e44bb630fd42d8d1d83d
 * @implementation Dynamic
 * @cmcId crypto-com
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb63b606ac810a52cca15e44bb630fd42d8d1d83d?apiKey=freekey', (error, response, body) => {
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
