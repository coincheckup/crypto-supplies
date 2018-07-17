/**
 * @title Rialto
 * @symbol XRL
 * @ethContractAddr 0xb24754be79281553dc1adc160ddf5cd9b74361a4
 * @implementation Dynamic
 * @cmcId rialto
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb24754be79281553dc1adc160ddf5cd9b74361a4?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -9)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
