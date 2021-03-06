/**
 * @title XYO Network
 * @symbol XYO
 * @ethContractAddr 0x55296f69f40ea6d20e478533c15a6b08b654e758
 * @implementation Dynamic
 * @cmcId xyo-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x55296f69f40ea6d20e478533c15a6b08b654e758?apiKey=freekey', (error, response, body) => {
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
