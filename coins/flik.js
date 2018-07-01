/**
 * @title FLiK
 * @symbol FLIK
 * @ethContractAddr 0x17fd666fa0784885fa1afec8ac624d9b7e72b752
 * @implementation Dynamic
 * @cmcId flik
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x17fd666fa0784885fa1afec8ac624d9b7e72b752?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -14)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
