/**
 * @title CoinPoker
 * @symbol CHP
 * @ethContractAddr 0xf3db7560e820834658b590c96234c333cd3d5e5e
 * @implementation Dynamic
 * @cmcId coinpoker
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf3db7560e820834658b590c96234c333cd3d5e5e?apiKey=freekey', (error, response, body) => {
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
