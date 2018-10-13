/**
 * @title Rivetz
 * @symbol RVT
 * @ethContractAddr 0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244
 * @implementation Dynamic
 * @cmcId rivetz
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244?apiKey=freekey', (error, response, body) => {
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
