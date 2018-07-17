/**
 * @title Target Coin
 * @symbol TGT
 * @ethContractAddr 0xac3da587eac229c9896d919abc235ca4fd7f72c1
 * @implementation Dynamic
 * @cmcId target-coin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xac3da587eac229c9896d919abc235ca4fd7f72c1?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -1)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
