/**
 * @title ICON
 * @symbol ICX
 * @ethContractAddr 0xb5a5f22694352c15b00323844ad545abb2b11028
 * @implementation Dynamic
 * @cmcId icon
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb5a5f22694352c15b00323844ad545abb2b11028?apiKey=freekey', (error, response, body) => {
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
