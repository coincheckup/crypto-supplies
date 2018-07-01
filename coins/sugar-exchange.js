/**
 * @title Sugar Exchange
 * @symbol SGR
 * @ethContractAddr 0xCB5A05beF3257613E984C17DbcF039952B6d883F
 * @implementation Dynamic
 * @cmcId sugar-exchange
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xCB5A05beF3257613E984C17DbcF039952B6d883F?apiKey=freekey', (error, response, body) => {
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
