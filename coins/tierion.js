/**
 * @title Tierion
 * @symbol TNT
 * @ethContractAddr 0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8
 * @implementation Dynamic
 * @cmcId tierion
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8?apiKey=freekey', (error, response, body) => {
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
