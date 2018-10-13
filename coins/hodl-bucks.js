/**
 * @title HODL Bucks
 * @symbol HDLB
 * @ethContractAddr 0xad6714bd97cbbd29788f8838bc865ee71b843eb8
 * @implementation Dynamic
 * @cmcId hodl-bucks
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xad6714bd97cbbd29788f8838bc865ee71b843eb8?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
