/**
* @title aXpire
* @symbol AXP
* @ethContractAddr 0x9af2c6b1a28d3d6bc084bd267f70e90d49741d5b
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x9af2c6b1a28d3d6bc084bd267f70e90d49741d5b?apiKey=freekey', (error, response, body) => {
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
