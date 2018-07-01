/**
 * @title DATA
 * @symbol DTA
 * @ethContractAddr 0x69b148395ce0015c13e36bffbad63f49ef874e03
 * @implementation Dynamic
 * @cmcId data
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x69b148395ce0015c13e36bffbad63f49ef874e03?apiKey=freekey', (error, response, body) => {
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
