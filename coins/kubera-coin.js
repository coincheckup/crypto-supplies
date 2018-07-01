/**
 * @title Kubera Coin
 * @symbol KBR
 * @ethContractAddr 0xd5527579226e4ebc8864906e49d05d4458ccf47f
 * @implementation Dynamic
 * @cmcId kubera-coin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd5527579226e4ebc8864906e49d05d4458ccf47f?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
