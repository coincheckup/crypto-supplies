/**
 * @title ROOBEE
 * @symbol ROOBEE
 * @ethContractAddr 0xa31b1767e09f842ecfd4bc471fe44f830e3891aa
 * @implementation Dynamic
 * @cmcId roobee
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa31b1767e09f842ecfd4bc471fe44f830e3891aa?apiKey=freekey', (error, response, body) => {
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
