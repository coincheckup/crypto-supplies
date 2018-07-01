/**
 * @title Docademic
 * @symbol MTC
 * @ethContractAddr 0x905E337c6c8645263D3521205Aa37bf4d034e745
 * @implementation Dynamic
 * @cmcId docademic
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x905E337c6c8645263D3521205Aa37bf4d034e745?apiKey=freekey', (error, response, body) => {
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
