/**
* @title Cryptopay
* @symbol CPAY
* @ethContractAddr 0x0ebb614204e47c09b6c3feb9aaecad8ee060e23e
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0ebb614204e47c09b6c3feb9aaecad8ee060e23e?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -0)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
