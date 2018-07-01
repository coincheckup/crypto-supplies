/**
 * @title PressOne
 * @symbol PRS
 * @ethContractAddr 0xe0d95530820aafc51b1d98023aa1ff000b78d8b2
 * @implementation Dynamic
 * @cmcId pressone
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe0d95530820aafc51b1d98023aa1ff000b78d8b2?apiKey=freekey', (error, response, body) => {
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
