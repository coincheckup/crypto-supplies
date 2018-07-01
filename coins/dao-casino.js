/**
 * @title DAO.Casino
 * @symbol BET
 * @ethContractAddr 0x8aA33A7899FCC8eA5fBe6A608A109c3893A1B8b2
 * @implementation Dynamic
 * @cmcId dao-casino
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8aA33A7899FCC8eA5fBe6A608A109c3893A1B8b2?apiKey=freekey', (error, response, body) => {
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
