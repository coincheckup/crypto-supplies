/**
 * @title Fortuna
 * @symbol FOTA
 * @ethContractAddr 0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c
 * @implementation Dynamic
 * @cmcId fortuna
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
