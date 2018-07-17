/**
 * @title Binance Coin
 * @symbol BNB
 * @ethContractAddr 0xB8c77482e45F1F44dE1745F52C74426C631bDD52
 * @implementation Dynamic
 * @cmcId binance-coin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xB8c77482e45F1F44dE1745F52C74426C631bDD52?apiKey=freekey', (error, response, body) => {
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
