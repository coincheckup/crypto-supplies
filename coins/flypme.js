/**
 * @title FlypMe
 * @symbol FYP
 * @ethContractAddr 0x8f0921f30555624143d427b340b1156914882c10
 * @implementation Dynamic
 * @cmcId flypme
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8f0921f30555624143d427b340b1156914882c10?apiKey=freekey', (error, response, body) => {
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
