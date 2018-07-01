/**
 * @title CoinMeet
 * @symbol MEET
 * @ethContractAddr 0x7f121d4EC6c2C07eB6BC7989d91d2d4fF654c068
 * @implementation Dynamic
 * @cmcId coinmeet
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x7f121d4EC6c2C07eB6BC7989d91d2d4fF654c068?apiKey=freekey', (error, response, body) => {
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
