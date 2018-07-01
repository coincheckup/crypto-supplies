/**
 * @title Speed Mining Service
 * @symbol SMS
 * @ethContractAddr 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
 * @implementation Dynamic
 * @cmcId speed-mining-service
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x39013f961c378f02c2b82a6e1d31e9812786fd9d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -3)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
