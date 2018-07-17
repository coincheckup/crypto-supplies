/**
 * @title Everus
 * @symbol EVR
 * @ethContractAddr 0x3137619705b5fc22a3048989f983905e456b59ab
 * @implementation Dynamic
 * @cmcId everus
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x3137619705b5fc22a3048989f983905e456b59ab?apiKey=freekey', (error, response, body) => {
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
