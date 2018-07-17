/**
 * @title RouletteToken
 * @symbol RLT
 * @ethContractAddr 0xcced5b8288086be8c38e23567e684c3740be4d48
 * @implementation Dynamic
 * @cmcId roulettetoken
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xcced5b8288086be8c38e23567e684c3740be4d48?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -10)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
