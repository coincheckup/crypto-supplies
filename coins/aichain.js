/**
 * @title AICHAIN
 * @symbol AIT
 * @ethContractAddr 0x79650799e7899a802cb96c0bc33a6a8d4ce4936c
 * @implementation Dynamic
 * @cmcId aichain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x79650799e7899a802cb96c0bc33a6a8d4ce4936c?apiKey=freekey', (error, response, body) => {
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
