/**
 * @title DADI
 * @symbol DADI
 * @ethContractAddr 0xfb2f26f266fb2805a387230f2aa0a331b4d96fba
 * @implementation Dynamic
 * @cmcId dadi
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xfb2f26f266fb2805a387230f2aa0a331b4d96fba?apiKey=freekey', (error, response, body) => {
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
