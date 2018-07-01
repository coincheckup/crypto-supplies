/**
 * @title Decentraland
 * @symbol MANA
 * @ethContractAddr 0x0f5d2fb29fb7d3cfee444a200298f468908cc942
 * @implementation Dynamic
 * @cmcId decentraland
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0f5d2fb29fb7d3cfee444a200298f468908cc942?apiKey=freekey', (error, response, body) => {
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
