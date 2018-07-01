/**
 * @title Golem
 * @symbol GNT
 * @ethContractAddr 0xa74476443119A942dE498590Fe1f2454d7D4aC0d
 * @implementation Dynamic
 * @cmcId golem-network-tokens
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa74476443119A942dE498590Fe1f2454d7D4aC0d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -18)
        };

        if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
            resp.c = Number(body.price.availableSupply);
        }

        callback(resp);
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
