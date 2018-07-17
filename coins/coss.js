/**
 * @title COSS
 * @symbol COSS
 * @ethContractAddr 0x65292eeadf1426cd2df1c4793a3d7519f253913b
 * @implementation Dynamic
 * @cmcId coss
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x65292eeadf1426cd2df1c4793a3d7519f253913b?apiKey=freekey', (error, response, body) => {
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
