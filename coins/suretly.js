/**
* @title Suretly
* @symbol SUR
* @ethContractAddr 0xe120c1ecbfdfea7f0a8f0ee30063491e8c26fedf
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe120c1ecbfdfea7f0a8f0ee30063491e8c26fedf?apiKey=freekey', (error, response, body) => {
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
