/**
 * @title EthBet
 * @symbol EBET
 * @ethContractAddr 0x7D5Edcd23dAa3fB94317D32aE253eE1Af08Ba14d
 * @implementation Dynamic
 * @cmcId ethbet
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x7D5Edcd23dAa3fB94317D32aE253eE1Af08Ba14d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
