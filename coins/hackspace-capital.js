/**
 * @title Hackspace Capital
 * @symbol HAC
 * @ethContractAddr 0x43567eb78638A55bbE51E9f9FB5B2D7AD1F125aa
 * @implementation Dynamic
 * @cmcId hackspace-capital
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x43567eb78638A55bbE51E9f9FB5B2D7AD1F125aa?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
