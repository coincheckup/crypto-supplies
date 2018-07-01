/**
 * @title POLY AI
 * @symbol AI
 * @ethContractAddr 0x5121e348e897daef1eef23959ab290e5557cf274
 * @implementation Dynamic
 * @cmcId poly-ai
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5121e348e897daef1eef23959ab290e5557cf274?apiKey=freekey', (error, response, body) => {
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
