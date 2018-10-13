/**
 * @title OriginTrail
 * @symbol TRAC
 * @ethContractAddr 0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f
 * @implementation Dynamic
 * @cmcId origintrail
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f?apiKey=freekey', (error, response, body) => {
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
