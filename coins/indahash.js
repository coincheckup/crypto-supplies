/**
 * @title indaHash
 * @symbol IDH
 * @ethContractAddr 0x5136C98A80811C3f46bDda8B5c4555CFd9f812F0
 * @implementation Dynamic
 * @cmcId indahash
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5136C98A80811C3f46bDda8B5c4555CFd9f812F0?apiKey=freekey', (error, response, body) => {
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
