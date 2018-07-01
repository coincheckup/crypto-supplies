/**
 * @title Open Trading Network
 * @symbol OTN
 * @ethContractAddr 0x881ef48211982d01e2cb7092c915e647cd40d85c
 * @implementation Dynamic
 * @cmcId open-trading-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x881ef48211982d01e2cb7092c915e647cd40d85c?apiKey=freekey', (error, response, body) => {
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
