/**
 * @title FAPcoin
 * @symbol FAP
 * @ethContractAddr 0x6467882316dc6e206feef05fba6deaa69277f155
 * @implementation Dynamic
 * @cmcId fapcoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6467882316dc6e206feef05fba6deaa69277f155?apiKey=freekey', (error, response, body) => {
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
