/**
 * @title Shivom
 * @symbol OMX
 * @ethContractAddr 0xb5dbc6d3cf380079df3b27135664b6bcf45d1869
 * @implementation Dynamic
 * @cmcId shivom
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb5dbc6d3cf380079df3b27135664b6bcf45d1869?apiKey=freekey', (error, response, body) => {
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
