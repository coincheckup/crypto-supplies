/**
 * @title Genesis Vision
 * @symbol GVT
 * @ethContractAddr 0x103c3a209da59d3e7c4a89307e66521e081cfdf0
 * @implementation Dynamic
 * @cmcId genesis-vision
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x103c3a209da59d3e7c4a89307e66521e081cfdf0?apiKey=freekey', (error, response, body) => {
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
