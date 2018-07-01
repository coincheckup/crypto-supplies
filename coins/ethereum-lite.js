/**
 * @title Ethereum Lite
 * @symbol ELITE
 * @ethContractAddr 0x0a76aad21948ea1ef447d26dee91a54370e151e0
 * @implementation Dynamic
 * @cmcId ethereum-lite
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0a76aad21948ea1ef447d26dee91a54370e151e0?apiKey=freekey', (error, response, body) => {
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
