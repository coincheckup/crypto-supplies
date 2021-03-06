/**
 * @title Aigang
 * @symbol AIX
 * @ethContractAddr 0x1063ce524265d5a3a624f4914acd573dd89ce988
 * @implementation Dynamic
 * @cmcId aigang
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1063ce524265d5a3a624f4914acd573dd89ce988?apiKey=freekey', (error, response, body) => {
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
