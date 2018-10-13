/**
 * @title Polybius
 * @symbol PLBT
 * @ethContractAddr 0x0affa06e7fbe5bc9a764c979aa66e8256a631f02
 * @implementation Dynamic
 * @cmcId polybius
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0affa06e7fbe5bc9a764c979aa66e8256a631f02?apiKey=freekey', (error, response, body) => {
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
