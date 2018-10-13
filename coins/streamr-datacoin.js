/**
 * @title Streamr DATAcoin
 * @symbol DATA
 * @ethContractAddr 0x0cf0ee63788a0849fe5297f3407f701e122cc023
 * @implementation Dynamic
 * @cmcId streamr-datacoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0cf0ee63788a0849fe5297f3407f701e122cc023?apiKey=freekey', (error, response, body) => {
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
