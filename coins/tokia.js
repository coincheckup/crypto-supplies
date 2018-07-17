/**
 * @title Tokia
 * @symbol TKA
 * @ethContractAddr 0xdae1baf249964bc4b6ac98c3122f0e3e785fd279
 * @implementation Dynamic
 * @cmcId tokia
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xdae1baf249964bc4b6ac98c3122f0e3e785fd279?apiKey=freekey', (error, response, body) => {
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
