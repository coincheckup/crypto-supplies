/**
 * @title Ethereum Gold
 * @symbol ETG
 * @ethContractAddr 0x28c8d01ff633ea9cd8fc6a451d7457889e698de6
 * @implementation Dynamic
 * @cmcId ethereum-gold
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x28c8d01ff633ea9cd8fc6a451d7457889e698de6?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
