/**
 * @title GoldMint
 * @symbol MNTP
 * @ethContractAddr 0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc
 * @implementation Dynamic
 * @cmcId goldmint
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc?apiKey=freekey', (error, response, body) => {
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
