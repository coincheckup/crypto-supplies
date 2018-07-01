/**
 * @title Lamden
 * @symbol TAU
 * @ethContractAddr 0xc27a2f05fa577a83ba0fdb4c38443c0718356501
 * @implementation Dynamic
 * @cmcId lamden
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xc27a2f05fa577a83ba0fdb4c38443c0718356501?apiKey=freekey', (error, response, body) => {
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
