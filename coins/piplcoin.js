/**
* @title PiplCoin
* @symbol PIPL
* @ethContractAddr 0xe64509f0bf07ce2d29a7ef19a8a9bc065477c1b4
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe64509f0bf07ce2d29a7ef19a8a9bc065477c1b4?apiKey=freekey', (error, response, body) => {
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
