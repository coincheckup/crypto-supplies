/**
 * @title StarCredits
 * @symbol STRC
 * @ethContractAddr 0x46492473755e8df960f8034877f61732d718ce96
 * @implementation Dynamic
 * @cmcId starcredits
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x46492473755e8df960f8034877f61732d718ce96?apiKey=freekey', (error, response, body) => {
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
