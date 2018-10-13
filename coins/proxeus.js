/**
 * @title Proxeus
 * @symbol XES
 * @ethContractAddr 0xa017ac5fac5941f95010b12570b812c974469c2c
 * @implementation Dynamic
 * @cmcId proxeus
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa017ac5fac5941f95010b12570b812c974469c2c?apiKey=freekey', (error, response, body) => {
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
