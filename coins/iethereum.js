/**
 * @title iEthereum
 * @symbol IETH
 * @ethContractAddr 0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b
 * @implementation Dynamic
 * @cmcId iethereum
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b?apiKey=freekey', (error, response, body) => {
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
