/**
 * @title Cashaa
 * @symbol CAS
 * @ethContractAddr 0xe8780b48bdb05f928697a5e8155f672ed91462f7
 * @implementation Dynamic
 * @cmcId cashaa
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe8780b48bdb05f928697a5e8155f672ed91462f7?apiKey=freekey', (error, response, body) => {
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
