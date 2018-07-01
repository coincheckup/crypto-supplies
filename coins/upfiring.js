/**
 * @title Upfiring
 * @symbol UFR
 * @ethContractAddr 0xea097a2b1db00627b2fa17460ad260c016016977
 * @implementation Dynamic
 * @cmcId upfiring
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xea097a2b1db00627b2fa17460ad260c016016977?apiKey=freekey', (error, response, body) => {
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
