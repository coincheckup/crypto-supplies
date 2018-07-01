/**
* @title Etheriya
* @symbol RIYA
* @ethContractAddr 0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3?apiKey=freekey', (error, response, body) => {
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
