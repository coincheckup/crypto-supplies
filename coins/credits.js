/**
 * @title Credits
 * @symbol CS
 * @ethContractAddr 0x46b9ad944d1059450da1163511069c718f699d31
 * @implementation Dynamic
 * @cmcId credits
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x46b9ad944d1059450da1163511069c718f699d31?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
