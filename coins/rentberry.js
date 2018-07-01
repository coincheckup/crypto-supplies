/**
 * @title Rentberry
 * @symbol BERRY
 * @ethContractAddr 0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c
 * @implementation Dynamic
 * @cmcId rentberry
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c?apiKey=freekey', (error, response, body) => {
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
