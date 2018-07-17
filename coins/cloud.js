/**
 * @title Cloud
 * @symbol CLD
 * @ethContractAddr 0xc3951d77737733174152532e8b0f27e2c4e9f0dc
 * @implementation Dynamic
 * @cmcId cloud
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xc3951d77737733174152532e8b0f27e2c4e9f0dc?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
