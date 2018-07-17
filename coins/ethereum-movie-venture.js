/**
 * @title Ethereum Movie Venture
 * @symbol EMV
 * @ethContractAddr 0xB802b24E0637c2B87D2E8b7784C055BBE921011a
 * @implementation Dynamic
 * @cmcId ethereum-movie-venture
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xB802b24E0637c2B87D2E8b7784C055BBE921011a?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
