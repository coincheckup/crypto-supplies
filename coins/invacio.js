/**
 * @title Invacio
 * @symbol INV
 * @ethContractAddr 0xece83617db208ad255ad4f45daf81e25137535bb
 * @implementation Dynamic
 * @cmcId invacio
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xece83617db208ad255ad4f45daf81e25137535bb?apiKey=freekey', (error, response, body) => {
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
