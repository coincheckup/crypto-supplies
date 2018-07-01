/**
 * @title SpankChain
 * @symbol SPANK
 * @ethContractAddr 0x42d6622dece394b54999fbd73d108123806f6a18
 * @implementation Dynamic
 * @cmcId spankchain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x42d6622dece394b54999fbd73d108123806f6a18?apiKey=freekey', (error, response, body) => {
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
