/**
 * @title Cube
 * @symbol AUTO
 * @ethContractAddr 0x622dFfCc4e83C64ba959530A5a5580687a57581b
 * @implementation Dynamic
 * @cmcId cube
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x622dFfCc4e83C64ba959530A5a5580687a57581b?apiKey=freekey', (error, response, body) => {
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
