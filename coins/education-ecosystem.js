/**
* @title Education Ecosystem
* @symbol LEDU
* @ethContractAddr 0x5b26c5d0772e5bbac8b3182ae9a13f9bb2d03765
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5b26c5d0772e5bbac8b3182ae9a13f9bb2d03765?apiKey=freekey', (error, response, body) => {
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
