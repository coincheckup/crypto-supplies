/**
 * @title Cappasity
 * @symbol CAPP
 * @ethContractAddr 0x04f2e7221fdb1b52a68169b25793e51478ff0329
 * @implementation Dynamic
 * @cmcId cappasity
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x04f2e7221fdb1b52a68169b25793e51478ff0329?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
