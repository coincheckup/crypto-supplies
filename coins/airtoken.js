/**
 * @title AirToken
 * @symbol AIR
 * @ethContractAddr 0x27dce1ec4d3f72c3e457cc50354f1f975ddef488
 * @implementation Dynamic
 * @cmcId airtoken
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x27dce1ec4d3f72c3e457cc50354f1f975ddef488?apiKey=freekey', (error, response, body) => {
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
