/**
* @title Pixie Coin
* @symbol PXC
* @ethContractAddr 0xc27c95350ecd634c80df89db0f10cd5c24b7b11f
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xc27c95350ecd634c80df89db0f10cd5c24b7b11f?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -2)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
