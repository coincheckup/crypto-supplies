/**
 * @title Sharechain
 * @symbol SSS
 * @ethContractAddr 0x7d3e7d41da367b4fdce7cbe06502b13294deb758
 * @implementation Dynamic
 * @cmcId sharechain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x7d3e7d41da367b4fdce7cbe06502b13294deb758?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
