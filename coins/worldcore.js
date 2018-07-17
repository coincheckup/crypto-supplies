/**
 * @title Worldcore
 * @symbol WRC
 * @ethContractAddr 0x72adadb447784dd7ab1f472467750fc485e4cb2d
 * @implementation Dynamic
 * @cmcId worldcore
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x72adadb447784dd7ab1f472467750fc485e4cb2d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
