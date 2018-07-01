/**
 * @title Datawallet
 * @symbol DXT
 * @ethContractAddr 0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6
 * @implementation Dynamic
 * @cmcId datawallet
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6?apiKey=freekey', (error, response, body) => {
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
