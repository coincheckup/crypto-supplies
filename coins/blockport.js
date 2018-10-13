/**
 * @title Blockport
 * @symbol BPT
 * @ethContractAddr 0x327682779bab2bf4d1337e8974ab9de8275a7ca8
 * @implementation Dynamic
 * @cmcId blockport
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x327682779bab2bf4d1337e8974ab9de8275a7ca8?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
