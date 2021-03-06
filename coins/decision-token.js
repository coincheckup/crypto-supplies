/**
 * @title Decision Token
 * @symbol HST
 * @ethContractAddr 0x554c20b7c486beee439277b4540a434566dc4c02
 * @implementation Dynamic
 * @cmcId decision-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x554c20b7c486beee439277b4540a434566dc4c02?apiKey=freekey', (error, response, body) => {
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
