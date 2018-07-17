/**
 * @title Verify
 * @symbol CRED
 * @ethContractAddr 0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd
 * @implementation Dynamic
 * @cmcId verify
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd?apiKey=freekey', (error, response, body) => {
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
