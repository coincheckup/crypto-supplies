/**
 * @title DMarket
 * @symbol DMT
 * @ethContractAddr 0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1
 * @implementation Dynamic
 * @cmcId dmarket
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1?apiKey=freekey', (error, response, body) => {
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
