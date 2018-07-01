/**
 * @title iXledger
 * @symbol IXT
 * @ethContractAddr 0xfca47962d45adfdfd1ab2d972315db4ce7ccf094
 * @implementation Dynamic
 * @cmcId ixledger
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xfca47962d45adfdfd1ab2d972315db4ce7ccf094?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
