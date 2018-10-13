/**
 * @title Covesting
 * @symbol COV
 * @ethContractAddr 0xe2fb6529ef566a080e6d23de0bd351311087d567
 * @implementation Dynamic
 * @cmcId covesting
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe2fb6529ef566a080e6d23de0bd351311087d567?apiKey=freekey', (error, response, body) => {
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
