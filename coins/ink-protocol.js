/**
 * @title Ink Protocol
 * @symbol XNK
 * @ethContractAddr 0xbc86727e770de68b1060c91f6bb6945c73e10388
 * @implementation Dynamic
 * @cmcId ink-protocol
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xbc86727e770de68b1060c91f6bb6945c73e10388?apiKey=freekey', (error, response, body) => {
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
