/**
 * @title XMax
 * @symbol XMX
 * @ethContractAddr 0x0f8c45b896784a1e408526b9300519ef8660209c
 * @implementation Dynamic
 * @cmcId xmax
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0f8c45b896784a1e408526b9300519ef8660209c?apiKey=freekey', (error, response, body) => {
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
