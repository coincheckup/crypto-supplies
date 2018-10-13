/**
 * @title Bonpay
 * @symbol BON
 * @ethContractAddr 0xcc34366e3842ca1bd36c1f324d15257960fcc801
 * @implementation Dynamic
 * @cmcId bonpay
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xcc34366e3842ca1bd36c1f324d15257960fcc801?apiKey=freekey', (error, response, body) => {
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
