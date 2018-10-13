/**
 * @title EncrypGen
 * @symbol DNA
 * @ethContractAddr 0x82b0e50478eeafde392d45d1259ed1071b6fda81
 * @implementation Dynamic
 * @cmcId encrypgen
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x82b0e50478eeafde392d45d1259ed1071b6fda81?apiKey=freekey', (error, response, body) => {
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
