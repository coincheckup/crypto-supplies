/**
 * @title Soma
 * @symbol SCT
 * @ethContractAddr 0x63b992e6246d88f07fc35a056d2c365e6d441a3d
 * @implementation Dynamic
 * @cmcId soma
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x63b992e6246d88f07fc35a056d2c365e6d441a3d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
