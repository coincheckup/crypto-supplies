/**
 * @title Cortex
 * @symbol CTXC
 * @ethContractAddr 0xea11755ae41d889ceec39a63e6ff75a02bc1c00d
 * @implementation Dynamic
 * @cmcId cortex
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xea11755ae41d889ceec39a63e6ff75a02bc1c00d?apiKey=freekey', (error, response, body) => {
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
