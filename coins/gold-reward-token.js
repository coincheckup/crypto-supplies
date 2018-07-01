/**
 * @title GOLD Reward Token
 * @symbol GRX
 * @ethContractAddr 0x219218f117dc9348b358b8471c55a073e5e0da0b
 * @implementation Dynamic
 * @cmcId gold-reward-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x219218f117dc9348b358b8471c55a073e5e0da0b?apiKey=freekey', (error, response, body) => {
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
