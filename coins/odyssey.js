/**
 * @title Odyssey
 * @symbol OCN
 * @ethContractAddr 0x4092678e4E78230F46A1534C0fbc8fA39780892B
 * @implementation Dynamic
 * @cmcId odyssey
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4092678e4E78230F46A1534C0fbc8fA39780892B?apiKey=freekey', (error, response, body) => {
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
