/**
 * @title Helbiz
 * @symbol HBZ
 * @ethContractAddr 0xe34e1944e776f39b9252790a0527ebda647ae668
 * @implementation Dynamic
 * @cmcId helbiz
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe34e1944e776f39b9252790a0527ebda647ae668?apiKey=freekey', (error, response, body) => {
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
