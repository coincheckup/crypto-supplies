/**
 * @title WePower
 * @symbol WPR
 * @ethContractAddr 0x4CF488387F035FF08c371515562CBa712f9015d4
 * @implementation Dynamic
 * @cmcId wepower
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x4CF488387F035FF08c371515562CBa712f9015d4?apiKey=freekey', (error, response, body) => {
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
