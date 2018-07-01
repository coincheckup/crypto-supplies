/**
 * @title Po.et
 * @symbol POE
 * @ethContractAddr 0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195
 * @implementation Dynamic
 * @cmcId poet
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195?apiKey=freekey', (error, response, body) => {
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
