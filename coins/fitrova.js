/**
 * @title Fitrova
 * @symbol FRV
 * @ethContractAddr 0x48df4e0296f908ceab0428a5182d19b31fc037d6
 * @implementation Dynamic
 * @cmcId fitrova
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x48df4e0296f908ceab0428a5182d19b31fc037d6?apiKey=freekey', (error, response, body) => {
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
