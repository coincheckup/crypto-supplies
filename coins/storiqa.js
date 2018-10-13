/**
 * @title Storiqa
 * @symbol STQ
 * @ethContractAddr 0x5c3a228510d246b78a3765c20221cbf3082b44a4
 * @implementation Dynamic
 * @cmcId storiqa
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5c3a228510d246b78a3765c20221cbf3082b44a4?apiKey=freekey', (error, response, body) => {
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
