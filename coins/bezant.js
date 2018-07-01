/**
 * @title Bezant
 * @symbol BZNT
 * @ethContractAddr 0xe1aee98495365fc179699c1bb3e761fa716bee62
 * @implementation Dynamic
 * @cmcId bezant
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe1aee98495365fc179699c1bb3e761fa716bee62?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
