/**
* @title Populous
* @symbol PPT
* @ethContractAddr 0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a?apiKey=freekey', (error, response, body) => {
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
