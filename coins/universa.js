/**
 * @title Universa
 * @symbol UTNP
 * @ethContractAddr 0x9e3319636e2126e3c0bc9e3134AEC5e1508A46c7
 * @implementation Dynamic
 * @cmcId universa
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x9e3319636e2126e3c0bc9e3134AEC5e1508A46c7?apiKey=freekey', (error, response, body) => {
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
