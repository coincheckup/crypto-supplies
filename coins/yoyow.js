/**
 * @title YOYOW
 * @symbol YOYOW
 * @ethContractAddr 0xcbeaec699431857fdb4d37addbbdc20e132d4903
 * @implementation Dynamic
 * @cmcId yoyow
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xcbeaec699431857fdb4d37addbbdc20e132d4903?apiKey=freekey', (error, response, body) => {
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
