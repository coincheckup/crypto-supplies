/**
 * @title Senderon
 * @symbol SDRN
 * @ethContractAddr 0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7
 * @implementation Dynamic
 * @cmcId senderon
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7?apiKey=freekey', (error, response, body) => {
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
