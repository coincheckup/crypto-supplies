/**
 * @title Indorse Token
 * @symbol IND
 * @ethContractAddr 0xf8e386eda857484f5a12e4b5daa9984e06e73705
 * @implementation Dynamic
 * @cmcId indorse-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf8e386eda857484f5a12e4b5daa9984e06e73705?apiKey=freekey', (error, response, body) => {
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
