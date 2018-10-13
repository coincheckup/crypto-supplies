/**
 * @title MobileGo
 * @symbol MGO
 * @ethContractAddr 0x40395044Ac3c0C57051906dA938B54BD6557F212
 * @implementation Dynamic
 * @cmcId mobilego
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x40395044Ac3c0C57051906dA938B54BD6557F212?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
