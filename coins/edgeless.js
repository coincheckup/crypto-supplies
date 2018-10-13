/**
 * @title Edgeless
 * @symbol EDG
 * @ethContractAddr 0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c
 * @implementation Dynamic
 * @cmcId edgeless
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        var resp = {
            t: Number(body.totalSupply) * Math.pow(10, -0)
        };

        if (typeof body.price !== 'undefined' && typeof body.price.availableSupply !== 'undefined') {
            resp.c = Number(body.price.availableSupply);
        }

        callback(resp);
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
