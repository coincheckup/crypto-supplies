/**
 * @title Aditus
 * @symbol ADI
 * @ethContractAddr 0x8810c63470d38639954c6b41aac545848c46484a
 * @implementation Dynamic
 * @cmcId aditus
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8810c63470d38639954c6b41aac545848c46484a?apiKey=freekey', (error, response, body) => {
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
