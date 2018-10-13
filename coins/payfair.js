/**
 * @title Payfair
 * @symbol PFR
 * @ethContractAddr 0x2fa32a39fc1c399e0cc7b2935868f5165de7ce97
 * @implementation Dynamic
 * @cmcId payfair
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x2fa32a39fc1c399e0cc7b2935868f5165de7ce97?apiKey=freekey', (error, response, body) => {
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
