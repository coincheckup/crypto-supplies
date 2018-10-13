/**
 * @title Dalecoin
 * @symbol DALC
 * @ethContractAddr 0x07d9e49ea402194bf48a8276dafb16e4ed633317
 * @implementation Dynamic
 * @cmcId dalecoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x07d9e49ea402194bf48a8276dafb16e4ed633317?apiKey=freekey', (error, response, body) => {
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
