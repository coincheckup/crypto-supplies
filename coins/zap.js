/**
 * @title Zap
 * @symbol ZAP
 * @ethContractAddr 0x6781a0f84c7e9e846dcb84a9a5bd49333067b104
 * @implementation Dynamic
 * @cmcId zap
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6781a0f84c7e9e846dcb84a9a5bd49333067b104?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
