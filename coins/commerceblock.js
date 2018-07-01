/**
 * @title CommerceBlock
 * @symbol CBT
 * @ethContractAddr 0x076C97e1c869072eE22f8c91978C99B4bcB02591
 * @implementation Dynamic
 * @cmcId commerceblock
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x076C97e1c869072eE22f8c91978C99B4bcB02591?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
