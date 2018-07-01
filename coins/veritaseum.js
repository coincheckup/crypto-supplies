/**
 * @title Veritaseum
 * @symbol VERI
 * @ethContractAddr 0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374
 * @implementation Dynamic
 * @cmcId veritaseum
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374?apiKey=freekey', (error, response, body) => {
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
