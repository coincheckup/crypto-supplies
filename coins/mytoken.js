/**
* @title MyToken
* @symbol MT
* @ethContractAddr 0x9b4e2b4b13d125238aa0480dd42b4f6fc71b37cc
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x9b4e2b4b13d125238aa0480dd42b4f6fc71b37cc?apiKey=freekey', (error, response, body) => {
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
