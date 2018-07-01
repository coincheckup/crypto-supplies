/**
 * @title MyBit Token
 * @symbol MYB
 * @ethContractAddr 0x94298f1e0ab2dfad6eeffb1426846a3c29d98090
 * @implementation Dynamic
 * @cmcId mybit-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x94298f1e0ab2dfad6eeffb1426846a3c29d98090?apiKey=freekey', (error, response, body) => {
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
