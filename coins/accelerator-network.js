/**
* @title Accelerator Network
* @symbol ACC
* @ethContractAddr 0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2?apiKey=freekey', (error, response, body) => {
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
