/**
 * @title Decentralized Machine Learning
 * @symbol DML
 * @ethContractAddr 0xbcdfe338d55c061c084d81fd793ded00a27f226d
 * @implementation Dynamic
 * @cmcId decentralized-machine-learning
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xbcdfe338d55c061c084d81fd793ded00a27f226d?apiKey=freekey', (error, response, body) => {
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
