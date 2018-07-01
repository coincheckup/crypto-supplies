/**
 * @title ArbitrageCT
 * @symbol ARCT
 * @ethContractAddr 0x1245ef80f4d9e02ed9425375e8f649b9221b31d8
 * @implementation Dynamic
 * @cmcId arbitragect
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1245ef80f4d9e02ed9425375e8f649b9221b31d8?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
