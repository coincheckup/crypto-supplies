/**
 * @title Bigbom
 * @symbol BBO
 * @ethContractAddr 0x84f7c44b6fed1080f647e354d552595be2cc602f
 * @implementation Dynamic
 * @cmcId bigbom
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x84f7c44b6fed1080f647e354d552595be2cc602f?apiKey=freekey', (error, response, body) => {
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
