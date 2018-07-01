/**
 * @title U Network
 * @symbol UUU
 * @ethContractAddr 0x3543638ed4a9006e4840b105944271bcea15605d
 * @implementation Dynamic
 * @cmcId u-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x3543638ed4a9006e4840b105944271bcea15605d?apiKey=freekey', (error, response, body) => {
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
