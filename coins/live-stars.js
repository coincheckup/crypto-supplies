/**
 * @title Live Stars
 * @symbol LIVE
 * @ethContractAddr 0x24a77c1f17c547105e14813e517be06b0040aa76
 * @implementation Dynamic
 * @cmcId live-stars
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x24a77c1f17c547105e14813e517be06b0040aa76?apiKey=freekey', (error, response, body) => {
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
