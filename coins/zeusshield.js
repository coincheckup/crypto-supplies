/**
 * @title Zeusshield
 * @symbol ZSC
 * @ethContractAddr 0x7A41e0517a5ecA4FdbC7FbebA4D4c47B9fF6DC63
 * @implementation Dynamic
 * @cmcId zeusshield
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x7A41e0517a5ecA4FdbC7FbebA4D4c47B9fF6DC63?apiKey=freekey', (error, response, body) => {
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
