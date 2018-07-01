/**
 * @title TRAXIA
 * @symbol TMT
 * @ethContractAddr 0x3209f98bebf0149b769ce26d71f7aea8e435efea
 * @implementation Dynamic
 * @cmcId traxia
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x3209f98bebf0149b769ce26d71f7aea8e435efea?apiKey=freekey', (error, response, body) => {
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
