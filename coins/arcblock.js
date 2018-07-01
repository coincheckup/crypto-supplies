/**
 * @title Arcblock
 * @symbol ABT
 * @ethContractAddr 0xb98d4c97425d9908e66e53a6fdf673acca0be986
 * @implementation Dynamic
 * @cmcId arcblock
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb98d4c97425d9908e66e53a6fdf673acca0be986?apiKey=freekey', (error, response, body) => {
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
