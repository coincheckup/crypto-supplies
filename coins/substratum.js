/**
 * @title Substratum
 * @symbol SUB
 * @ethContractAddr 0x12480e24eb5bec1a9d4369cab6a80cad3c0a377a
 * @implementation Dynamic
 * @cmcId substratum
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x12480e24eb5bec1a9d4369cab6a80cad3c0a377a?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
