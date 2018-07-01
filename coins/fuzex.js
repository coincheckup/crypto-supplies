/**
 * @title FuzeX
 * @symbol FXT
 * @ethContractAddr 0x1829aa045e21e0d59580024a951db48096e01782
 * @implementation Dynamic
 * @cmcId fuzex
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1829aa045e21e0d59580024a951db48096e01782?apiKey=freekey', (error, response, body) => {
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
