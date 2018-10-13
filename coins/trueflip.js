/**
 * @title TrueFlip
 * @symbol TFL
 * @ethContractAddr 0xa7f976c360ebbed4465c2855684d1aae5271efa9
 * @implementation Dynamic
 * @cmcId trueflip
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa7f976c360ebbed4465c2855684d1aae5271efa9?apiKey=freekey', (error, response, body) => {
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
