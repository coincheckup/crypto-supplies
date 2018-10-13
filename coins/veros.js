/**
 * @title Veros
 * @symbol VRS
 * @ethContractAddr 0x92e78dae1315067a8819efd6dca432de9dcde2e9
 * @implementation Dynamic
 * @cmcId veros
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x92e78dae1315067a8819efd6dca432de9dcde2e9?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
