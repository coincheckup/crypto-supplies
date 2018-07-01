/**
 * @title Patron
 * @symbol PAT
 * @ethContractAddr 0xF3b3Cad094B89392fcE5faFD40bC03b80F2Bc624
 * @implementation Dynamic
 * @cmcId patron
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xF3b3Cad094B89392fcE5faFD40bC03b80F2Bc624?apiKey=freekey', (error, response, body) => {
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
