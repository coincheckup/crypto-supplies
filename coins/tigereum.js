/**
* @title Tigereum
* @symbol TIG
* @ethContractAddr 0xeee2d00eb7deb8dd6924187f5aa3496b7d06e62a
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xeee2d00eb7deb8dd6924187f5aa3496b7d06e62a?apiKey=freekey', (error, response, body) => {
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
