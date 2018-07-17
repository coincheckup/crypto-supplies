/**
 * @title Sense
 * @symbol SENSE
 * @ethContractAddr 0x6745fab6801e376cd24f03572b9c9b0d4edddccf
 * @implementation Dynamic
 * @cmcId sense
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6745fab6801e376cd24f03572b9c9b0d4edddccf?apiKey=freekey', (error, response, body) => {
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
