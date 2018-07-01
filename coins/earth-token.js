/**
 * @title Earth Token
 * @symbol EARTH
 * @ethContractAddr 0x900b4449236a7bb26b286601dd14d2bde7a6ac6c
 * @implementation Dynamic
 * @cmcId earth-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x900b4449236a7bb26b286601dd14d2bde7a6ac6c?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
