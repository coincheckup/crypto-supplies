/**
 * @title imbrex
 * @symbol REX
 * @ethContractAddr 0xf05a9382A4C3F29E2784502754293D88b835109C
 * @implementation Dynamic
 * @cmcId imbrex
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf05a9382A4C3F29E2784502754293D88b835109C?apiKey=freekey', (error, response, body) => {
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
