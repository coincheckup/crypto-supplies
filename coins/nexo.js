/**
* @title Nexo
* @symbol NEXO
* @ethContractAddr 0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206?apiKey=freekey', (error, response, body) => {
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
