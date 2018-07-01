/**
 * @title NAGA
 * @symbol NGC
 * @ethContractAddr 0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131
 * @implementation Dynamic
 * @cmcId naga
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131?apiKey=freekey', (error, response, body) => {
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
