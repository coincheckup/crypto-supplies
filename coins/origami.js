/**
 * @title Origami
 * @symbol ORI
 * @ethContractAddr 0xd2fa8f92ea72abb35dbd6deca57173d22db2ba49
 * @implementation Dynamic
 * @cmcId origami
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd2fa8f92ea72abb35dbd6deca57173d22db2ba49?apiKey=freekey', (error, response, body) => {
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
