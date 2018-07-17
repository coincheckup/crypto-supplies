/**
 * @title Enjin Coin
 * @symbol ENJ
 * @ethContractAddr 0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c
 * @implementation Dynamic
 * @cmcId enjin-coin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
