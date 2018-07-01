/**
* @title PCHAIN
* @symbol PAI
* @ethContractAddr 0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3?apiKey=freekey', (error, response, body) => {
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
