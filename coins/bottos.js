/**
 * @title Bottos
 * @symbol BTO
 * @ethContractAddr 0x36905fc93280f52362a1cbab151f25dc46742fb5
 * @implementation Dynamic
 * @cmcId bottos
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x36905fc93280f52362a1cbab151f25dc46742fb5?apiKey=freekey', (error, response, body) => {
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
