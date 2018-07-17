/**
 * @title IoT Chain
 * @symbol ITC
 * @ethContractAddr 0x5e6b6d9abad9093fdc861ea1600eba1b355cd940
 * @implementation Dynamic
 * @cmcId iot-chain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5e6b6d9abad9093fdc861ea1600eba1b355cd940?apiKey=freekey', (error, response, body) => {
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
