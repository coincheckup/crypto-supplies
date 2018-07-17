/**
 * @title Lendroid Support Token
 * @symbol LST
 * @ethContractAddr 0x4de2573e27e648607b50e1cfff921a33e4a34405
 * @implementation Dynamic
 * @cmcId lendroid-support-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4de2573e27e648607b50e1cfff921a33e4a34405?apiKey=freekey', (error, response, body) => {
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
