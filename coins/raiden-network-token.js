/**
 * @title Raiden Network Token
 * @symbol RDN
 * @ethContractAddr 0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6
 * @implementation Dynamic
 * @cmcId raiden-network-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6?apiKey=freekey', (error, response, body) => {
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
