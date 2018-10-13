/**
 * @title IPChain
 * @symbol IPC
 * @ethContractAddr 0x622cd54deb2bb7a051515192417109bcf3fe098f
 * @implementation Dynamic
 * @cmcId ipchain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x622cd54deb2bb7a051515192417109bcf3fe098f?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
