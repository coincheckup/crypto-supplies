/**
 * @title ClearPoll
 * @symbol POLL
 * @ethContractAddr 0x705EE96c1c160842C92c1aeCfCFfccc9C412e3D9
 * @implementation Dynamic
 * @cmcId clearpoll
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x705EE96c1c160842C92c1aeCfCFfccc9C412e3D9?apiKey=freekey', (error, response, body) => {
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
