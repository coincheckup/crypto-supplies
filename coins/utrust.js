/**
 * @title UTRUST
 * @symbol UTK
 * @ethContractAddr 0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38
 * @implementation Dynamic
 * @cmcId utrust
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38?apiKey=freekey', (error, response, body) => {
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
