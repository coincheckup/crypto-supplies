/**
 * @title Tracto
 * @symbol TRCT
 * @ethContractAddr 0x30cecb5461a449a90081f5a5f55db4e048397bab
 * @implementation Dynamic
 * @cmcId tracto
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x30cecb5461a449a90081f5a5f55db4e048397bab?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
