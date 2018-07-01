/**
 * @title InvestFeed
 * @symbol IFT
 * @ethContractAddr 0x7654915a1b82d6d2d0afc37c52af556ea8983c7e
 * @implementation Dynamic
 * @cmcId investfeed
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x7654915a1b82d6d2d0afc37c52af556ea8983c7e?apiKey=freekey', (error, response, body) => {
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
