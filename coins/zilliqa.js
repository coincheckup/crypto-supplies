/**
 * @title Zilliqa
 * @symbol ZIL
 * @ethContractAddr 0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27
 * @implementation Dynamic
 * @cmcId zilliqa
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -12)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
