/**
 * @title Leverj
 * @symbol LEV
 * @ethContractAddr 0x0f4ca92660efad97a9a70cb0fe969c755439772c
 * @implementation Dynamic
 * @cmcId leverj
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0f4ca92660efad97a9a70cb0fe969c755439772c?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -9)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
