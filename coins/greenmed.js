/**
 * @title GreenMed
 * @symbol GRMD
 * @ethContractAddr 0xb444208cb0516c150178fcf9a52604bc04a1acea
 * @implementation Dynamic
 * @cmcId greenmed
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb444208cb0516c150178fcf9a52604bc04a1acea?apiKey=freekey', (error, response, body) => {
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
