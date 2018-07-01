/**
 * @title EncryptoTel [ETH]
 * @symbol ETT
 * @ethContractAddr 0xe0c72452740414d861606a44ccd5ea7f96488278
 * @implementation Dynamic
 * @cmcId encryptotel-eth
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe0c72452740414d861606a44ccd5ea7f96488278?apiKey=freekey', (error, response, body) => {
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
