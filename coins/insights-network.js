/**
 * @title Insights Network
 * @symbol INSTAR
 * @ethContractAddr 0xc72fe8e3dd5bef0f9f31f259399f301272ef2a2d
 * @implementation Dynamic
 * @cmcId insights-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xc72fe8e3dd5bef0f9f31f259399f301272ef2a2d?apiKey=freekey', (error, response, body) => {
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
