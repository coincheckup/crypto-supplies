/**
 * @title SingularityNET
 * @symbol AGI
 * @ethContractAddr 0x8eb24319393716668d768dcec29356ae9cffe285
 * @implementation Dynamic
 * @cmcId singularitynet
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8eb24319393716668d768dcec29356ae9cffe285?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
