/**
 * @title Ethos
 * @symbol ETHOS
 * @ethContractAddr 0x5af2be193a6abca9c8817001f45744777db30756
 * @implementation Dynamic
 * @cmcId ethos
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5af2be193a6abca9c8817001f45744777db30756?apiKey=freekey', (error, response, body) => {
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
