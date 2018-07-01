/**
 * @title Electroneum
 * @symbol ETN
 * @ethContractAddr 0x81f89694ac96fefd794cb2c8526d2bd8da74b1fb
 * @implementation Dynamic
 * @cmcId electroneum
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x81f89694ac96fefd794cb2c8526d2bd8da74b1fb?apiKey=freekey', (error, response, body) => {
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
