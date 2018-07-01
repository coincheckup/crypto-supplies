/**
 * @title DEW
 * @symbol DEW
 * @ethContractAddr 0x20e94867794dba030ee287f1406e100d03c84cd3
 * @implementation Dynamic
 * @cmcId dew
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x20e94867794dba030ee287f1406e100d03c84cd3?apiKey=freekey', (error, response, body) => {
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
