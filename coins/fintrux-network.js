/**
 * @title FintruX Network
 * @symbol FTX
 * @ethContractAddr 0xd559f20296FF4895da39b5bd9ADd54b442596a61
 * @implementation Dynamic
 * @cmcId fintrux-network
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xd559f20296FF4895da39b5bd9ADd54b442596a61?apiKey=freekey', (error, response, body) => {
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
