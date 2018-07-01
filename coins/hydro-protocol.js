/**
 * @title Hydro Protocol
 * @symbol HOT
 * @ethContractAddr 0x9af839687f6c94542ac5ece2e317daae355493a1
 * @implementation Dynamic
 * @cmcId hydro-protocol
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x9af839687f6c94542ac5ece2e317daae355493a1?apiKey=freekey', (error, response, body) => {
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
