/**
 * @title Daneel
 * @symbol DAN
 * @ethContractAddr 0x9b70740e708a083c6ff38df52297020f5dfaa5ee
 * @implementation Dynamic
 * @cmcId daneel
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x9b70740e708a083c6ff38df52297020f5dfaa5ee?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -10)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
