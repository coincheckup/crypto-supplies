/**
 * @title Stox
 * @symbol STX
 * @ethContractAddr 0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45
 * @implementation Dynamic
 * @cmcId stox
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45?apiKey=freekey', (error, response, body) => {
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
