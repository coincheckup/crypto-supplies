/**
 * @title Billionaire Token
 * @symbol XBL
 * @ethContractAddr 0x49aec0752e68d0282db544c677f6ba407ba17ed7
 * @implementation Dynamic
 * @cmcId billionaire-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x49aec0752e68d0282db544c677f6ba407ba17ed7?apiKey=freekey', (error, response, body) => {
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
