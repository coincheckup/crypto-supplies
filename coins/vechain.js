/**
 * @title VeChain
 * @symbol VEN
 * @ethContractAddr 0xd850942ef8811f2a866692a623011bde52a462c1
 * @implementation Dynamic
 * @cmcId vechain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd850942ef8811f2a866692a623011bde52a462c1?apiKey=freekey', (error, response, body) => {
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
