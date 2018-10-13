/**
 * @title Legolas Exchange
 * @symbol LGO
 * @ethContractAddr 0x123ab195dd38b1b40510d467a6a359b201af056f
 * @implementation Dynamic
 * @cmcId legolas-exchange
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x123ab195dd38b1b40510d467a6a359b201af056f?apiKey=freekey', (error, response, body) => {
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
