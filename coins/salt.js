/**
 * @title SALT
 * @symbol SALT
 * @ethContractAddr 0x4156D3342D5c385a87D264F90653733592000581
 * @implementation Dynamic
 * @cmcId salt
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4156D3342D5c385a87D264F90653733592000581?apiKey=freekey', (error, response, body) => {
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
