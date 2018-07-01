/**
 * @title CryCash
 * @symbol CRC
 * @ethContractAddr 0xf41e5fbc2f6aac200dd8619e121ce1f05d150077
 * @implementation Dynamic
 * @cmcId crycash
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf41e5fbc2f6aac200dd8619e121ce1f05d150077?apiKey=freekey', (error, response, body) => {
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
