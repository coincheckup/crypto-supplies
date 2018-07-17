/**
 * @title Storm
 * @symbol STORM
 * @ethContractAddr 0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433
 * @implementation Dynamic
 * @cmcId storm
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433?apiKey=freekey', (error, response, body) => {
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
