/**
 * @title EJOY
 * @symbol EJOY
 * @ethContractAddr 0xaC0741127CAC11E4455C7943b654bcCeD7FDD5A4
 * @implementation Dynamic
 * @cmcId ejoy
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xaC0741127CAC11E4455C7943b654bcCeD7FDD5A4?apiKey=freekey', (error, response, body) => {
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
