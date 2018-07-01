/**
 * @title EZToken
 * @symbol EZT
 * @ethContractAddr 0x5e6016ae7d7c49d347dcf834860b9f3ee282812b
 * @implementation Dynamic
 * @cmcId eztoken
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5e6016ae7d7c49d347dcf834860b9f3ee282812b?apiKey=freekey', (error, response, body) => {
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
