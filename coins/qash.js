/**
 * @title QASH
 * @symbol QASH
 * @ethContractAddr 0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6
 * @implementation Dynamic
 * @cmcId qash
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
