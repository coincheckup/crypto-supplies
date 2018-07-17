/**
 * @title VeriME
 * @symbol VME
 * @ethContractAddr 0xc343f099d3e41aa5c1b59470450e21e92e2d840b
 * @implementation Dynamic
 * @cmcId verime
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xc343f099d3e41aa5c1b59470450e21e92e2d840b?apiKey=freekey', (error, response, body) => {
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
