/**
 * @title Mysterium
 * @symbol MYST
 * @ethContractAddr 0xa645264C5603E96c3b0B078cdab68733794B0A71
 * @implementation Dynamic
 * @cmcId mysterium
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa645264C5603E96c3b0B078cdab68733794B0A71?apiKey=freekey', (error, response, body) => {
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
