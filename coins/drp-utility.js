/**
 * @title DRP Utility
 * @symbol DRPU
 * @ethContractAddr 0xe30e02f049957e2a5907589e06ba646fb2c321ba
 * @implementation Dynamic
 * @cmcId drp-utility
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe30e02f049957e2a5907589e06ba646fb2c321ba?apiKey=freekey', (error, response, body) => {
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
