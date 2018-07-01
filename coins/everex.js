/**
 * @title Everex
 * @symbol EVX
 * @ethContractAddr 0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8
 * @implementation Dynamic
 * @cmcId everex
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
