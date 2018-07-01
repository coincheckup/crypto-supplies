/**
 * @title STK
 * @symbol STK
 * @ethContractAddr 0xaE73B38d1c9A8b274127ec30160a4927C4d71824
 * @implementation Dynamic
 * @cmcId stk
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xaE73B38d1c9A8b274127ec30160a4927C4d71824?apiKey=freekey', (error, response, body) => {
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
