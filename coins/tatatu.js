/**
 * @title TaTaTu
 * @symbol TTU
 * @ethContractAddr 0x9cda8a60dd5afa156c95bd974428d91a0812e054
 * @implementation Dynamic
 * @cmcId tatatu
 */

module.exports = (callback, request) => {
    request('http://api.ethplorer.io/getTokenInfo/0x9cda8a60dd5afa156c95bd974428d91a0812e054?apiKey=freekey', (error, response, body) => {
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
