/**
 * @title Numeraire
 * @symbol NMR
 * @ethContractAddr 0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671
 * @implementation Dynamic
 * @cmcId numeraire
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671?apiKey=freekey', (error, response, body) => {
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
