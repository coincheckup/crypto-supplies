/**
* @title Lympo
* @symbol LYM
* @ethContractAddr 0x57ad67acf9bf015e4820fbd66ea1a21bed8852ec
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x57ad67acf9bf015e4820fbd66ea1a21bed8852ec?apiKey=freekey', (error, response, body) => {
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
