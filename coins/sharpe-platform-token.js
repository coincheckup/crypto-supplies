/**
 * @title Sharpe Platform Token
 * @symbol SHP
 * @ethContractAddr 0xef2463099360a085f1f10b076ed72ef625497a06
 * @implementation Dynamic
 * @cmcId sharpe-platform-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xef2463099360a085f1f10b076ed72ef625497a06?apiKey=freekey', (error, response, body) => {
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
