/**
 * @title Sether
 * @symbol SETH
 * @ethContractAddr 0x78b039921e84e726eb72e7b1212bb35504c645ca
 * @implementation Dynamic
 * @cmcId sether
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x78b039921e84e726eb72e7b1212bb35504c645ca?apiKey=freekey', (error, response, body) => {
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
