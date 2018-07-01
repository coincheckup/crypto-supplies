/**
 * @title WaykiChain
 * @symbol WICC
 * @ethContractAddr 0x4f878c0852722b0976a955d68b376e4cd4ae99e5
 * @implementation Dynamic
 * @cmcId waykichain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4f878c0852722b0976a955d68b376e4cd4ae99e5?apiKey=freekey', (error, response, body) => {
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
