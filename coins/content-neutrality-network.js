/**
 * @title Content Neutrality Network
 * @symbol CNN
 * @ethContractAddr 0x8713d26637cf49e1b6b4a7ce57106aabc9325343
 * @implementation Dynamic
 * @cmcId content-neutrality-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8713d26637cf49e1b6b4a7ce57106aabc9325343?apiKey=freekey', (error, response, body) => {
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
