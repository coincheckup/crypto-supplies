/**
 * @title OneRoot Network
 * @symbol RNT
 * @ethContractAddr 0xff603f43946a3a28df5e6a73172555d8c8b02386
 * @implementation Dynamic
 * @cmcId oneroot-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xff603f43946a3a28df5e6a73172555d8c8b02386?apiKey=freekey', (error, response, body) => {
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
