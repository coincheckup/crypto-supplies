/**
* @title ELTCOIN
* @symbol ELTCOIN
* @ethContractAddr 0x44197a4c44d6a059297caf6be4f7e172bd56caaf
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x44197a4c44d6a059297caf6be4f7e172bd56caaf?apiKey=freekey', (error, response, body) => {
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
