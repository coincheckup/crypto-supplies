/**
 * @title Paypex
 * @symbol PAYX
 * @ethContractAddr 0x62a56a4a2ef4d355d34d10fbf837e747504d38d4
 * @implementation Dynamic
 * @cmcId paypex
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x62a56a4a2ef4d355d34d10fbf837e747504d38d4?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
