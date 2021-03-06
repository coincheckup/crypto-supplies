/**
 * @title ConnectJob
 * @symbol CJT
 * @ethContractAddr 0x3abdff32f76b42e7635bdb7e425f0231a5f3ab17
 * @implementation Dynamic
 * @cmcId connectjob
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x3abdff32f76b42e7635bdb7e425f0231a5f3ab17?apiKey=freekey', (error, response, body) => {
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
