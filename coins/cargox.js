/**
 * @title CargoX
 * @symbol CXO
 * @ethContractAddr 0xb6ee9668771a79be7967ee29a63d4184f8097143
 * @implementation Dynamic
 * @cmcId cargox
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb6ee9668771a79be7967ee29a63d4184f8097143?apiKey=freekey', (error, response, body) => {
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
