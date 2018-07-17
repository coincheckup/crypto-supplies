/**
 * @title Read
 * @symbol READ
 * @ethContractAddr 0x13d0bf45e5f319fa0b58900807049f23cae7c40d
 * @implementation Dynamic
 * @cmcId read
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x13d0bf45e5f319fa0b58900807049f23cae7c40d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
