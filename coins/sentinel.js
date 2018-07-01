/**
 * @title Sentinel
 * @symbol SENT
 * @ethContractAddr 0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037
 * @implementation Dynamic
 * @cmcId sentinel
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037?apiKey=freekey', (error, response, body) => {
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
