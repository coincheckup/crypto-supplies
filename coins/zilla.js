/**
 * @title Zilla
 * @symbol ZLA
 * @ethContractAddr 0xfd8971d5e8e1740ce2d0a84095fca4de729d0c16
 * @implementation Dynamic
 * @cmcId zilla
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xfd8971d5e8e1740ce2d0a84095fca4de729d0c16?apiKey=freekey', (error, response, body) => {
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
