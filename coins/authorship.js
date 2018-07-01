/**
 * @title Authorship
 * @symbol ATS
 * @ethContractAddr 0x2dAEE1AA61D60A252DC80564499A69802853583A
 * @implementation Dynamic
 * @cmcId authorship
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x2dAEE1AA61D60A252DC80564499A69802853583A?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -4)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
