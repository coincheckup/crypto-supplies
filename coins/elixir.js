/**
 * @title Elixir
 * @symbol ELIX
 * @ethContractAddr 0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8
 * @implementation Dynamic
 * @cmcId elixir
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8?apiKey=freekey', (error, response, body) => {
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
