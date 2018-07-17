/**
 * @title HeroNode
 * @symbol HER
 * @ethContractAddr 0x491c9a23db85623eed455a8efdd6aba9b911c5df
 * @implementation Dynamic
 * @cmcId heronode
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x491c9a23db85623eed455a8efdd6aba9b911c5df?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
