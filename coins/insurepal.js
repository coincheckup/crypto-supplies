/**
 * @title InsurePal
 * @symbol IPL
 * @ethContractAddr 0x64CdF819d3E75Ac8eC217B3496d7cE167Be42e80
 * @implementation Dynamic
 * @cmcId insurepal
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x64CdF819d3E75Ac8eC217B3496d7cE167Be42e80?apiKey=freekey', (error, response, body) => {
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
