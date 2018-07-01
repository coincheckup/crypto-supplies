/**
 * @title UpToken
 * @symbol UP
 * @ethContractAddr 0x6ba460ab75cd2c56343b3517ffeba60748654d26
 * @implementation Dynamic
 * @cmcId uptoken
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6ba460ab75cd2c56343b3517ffeba60748654d26?apiKey=freekey', (error, response, body) => {
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
