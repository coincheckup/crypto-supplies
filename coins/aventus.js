/**
 * @title Aventus
 * @symbol AVT
 * @ethContractAddr 0x0d88ed6e74bbfd96b831231638b66c05571e824f
 * @implementation Dynamic
 * @cmcId aventus
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0d88ed6e74bbfd96b831231638b66c05571e824f?apiKey=freekey', (error, response, body) => {
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
