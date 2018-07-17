/**
 * @title TE-FOOD
 * @symbol TFD
 * @ethContractAddr 0xe5f166c0d8872b68790061317bb6cca04582c912
 * @implementation Dynamic
 * @cmcId te-food
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe5f166c0d8872b68790061317bb6cca04582c912?apiKey=freekey', (error, response, body) => {
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
