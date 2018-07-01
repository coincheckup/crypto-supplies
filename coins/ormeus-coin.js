/**
 * @title Ormeus Coin
 * @symbol ORME
 * @ethContractAddr 0x516e5436bafdc11083654de7bb9b95382d08d5de
 * @implementation Dynamic
 * @cmcId ormeus-coin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x516e5436bafdc11083654de7bb9b95382d08d5de?apiKey=freekey', (error, response, body) => {
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
