/**
 * @title CRYPTO20
 * @symbol C20
 * @ethContractAddr 0x26e75307fc0c021472feb8f727839531f112f317
 * @implementation Dynamic
 * @cmcId c20
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x26e75307fc0c021472feb8f727839531f112f317?apiKey=freekey', (error, response, body) => {
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
