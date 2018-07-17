/**
 * @title ERC20
 * @symbol ERC20
 * @ethContractAddr 0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb
 * @implementation Dynamic
 * @cmcId erc20
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb?apiKey=freekey', (error, response, body) => {
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
