/**
 * @title Vice Industry Token
 * @symbol VIT
 * @ethContractAddr 0x23b75bc7aaf28e2d6628c3f424b3882f8f072a3c
 * @implementation Dynamic
 * @cmcId vice-industry-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x23b75bc7aaf28e2d6628c3f424b3882f8f072a3c?apiKey=freekey', (error, response, body) => {
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
