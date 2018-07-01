/**
* @title Titanium BAR
* @symbol TBAR
* @ethContractAddr 0xee8bd1502c3e9f6c543781467c01592ac51cfbb8
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xee8bd1502c3e9f6c543781467c01592ac51cfbb8?apiKey=freekey', (error, response, body) => {
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
