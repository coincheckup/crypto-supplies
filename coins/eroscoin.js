/**
 * @title Eroscoin
 * @symbol ERO
 * @ethContractAddr 0x74ceda77281b339142a36817fa5f9e29412bab85
 * @implementation Dynamic
 * @cmcId eroscoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x74ceda77281b339142a36817fa5f9e29412bab85?apiKey=freekey', (error, response, body) => {
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
