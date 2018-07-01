/**
 * @title Curriculum Vitae
 * @symbol CVH
 * @ethContractAddr 0x52DB8ebF894036ec997Da693C5fa237A4fb69d10
 * @implementation Dynamic
 * @cmcId curriculum-vitae
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x52DB8ebF894036ec997Da693C5fa237A4fb69d10?apiKey=freekey', (error, response, body) => {
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
