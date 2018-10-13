/**
 * @title Crypterium
 * @symbol CRPT
 * @ethContractAddr 0x80a7e048f37a50500351c204cb407766fa3bae7f
 * @implementation Dynamic
 * @cmcId crypterium
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x80a7e048f37a50500351c204cb407766fa3bae7f?apiKey=freekey', (error, response, body) => {
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
