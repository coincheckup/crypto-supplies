/**
* @title B2BX
* @symbol B2B
* @ethContractAddr 0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393?apiKey=freekey', (error, response, body) => {
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
