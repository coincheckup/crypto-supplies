/**
 * @title Autonio
 * @symbol NIO
 * @ethContractAddr 0x5554e04e76533e1d14c52f05beef6c9d329e1e30
 * @implementation Dynamic
 * @cmcId autonio
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5554e04e76533e1d14c52f05beef6c9d329e1e30?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
