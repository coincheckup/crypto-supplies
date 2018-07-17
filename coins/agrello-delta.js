/**
 * @title Agrello
 * @symbol DLT
 * @ethContractAddr 0x07e3c70653548B04f0A75970C1F81B4CBbFB606f
 * @implementation Dynamic
 * @cmcId agrello-delta
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x07e3c70653548B04f0A75970C1F81B4CBbFB606f?apiKey=freekey', (error, response, body) => {
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
