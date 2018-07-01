/**
 * @title Dentacoin
 * @symbol DCN
 * @ethContractAddr 0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6
 * @implementation Dynamic
 * @cmcId dentacoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6?apiKey=freekey', (error, response, body) => {
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
