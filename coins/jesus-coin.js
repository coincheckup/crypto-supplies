/**
 * @title Jesus Coin
 * @symbol JC
 * @ethContractAddr 0xe2d82dc7da0e6f882e96846451f4fabcc8f90528
 * @implementation Dynamic
 * @cmcId jesus-coin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe2d82dc7da0e6f882e96846451f4fabcc8f90528?apiKey=freekey', (error, response, body) => {
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
