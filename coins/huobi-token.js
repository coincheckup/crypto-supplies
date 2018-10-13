/**
 * @title Huobi Token
 * @symbol HT
 * @ethContractAddr 0x6f259637dcd74c767781e37bc6133cd6a68aa161
 * @implementation Dynamic
 * @cmcId huobi-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6f259637dcd74c767781e37bc6133cd6a68aa161?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
