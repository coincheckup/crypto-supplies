/**
 * @title MCAP
 * @symbol MCAP
 * @ethContractAddr 0x93e682107d1e9defb0b5ee701c71707a4b2e46bc
 * @implementation Dynamic
 * @cmcId mcap
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x93e682107d1e9defb0b5ee701c71707a4b2e46bc?apiKey=freekey', (error, response, body) => {
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
