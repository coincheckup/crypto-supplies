/**
 * @title Chainium
 * @symbol CHX
 * @ethContractAddr 0x1460a58096d80a50a2F1f956DDA497611Fa4f165
 * @implementation Dynamic
 * @cmcId chainium
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1460a58096d80a50a2F1f956DDA497611Fa4f165?apiKey=freekey', (error, response, body) => {
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
