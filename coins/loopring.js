/**
 * @title Loopring
 * @symbol LRC
 * @ethContractAddr 0xEF68e7C694F40c8202821eDF525dE3782458639f
 * @implementation Dynamic
 * @cmcId loopring
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xEF68e7C694F40c8202821eDF525dE3782458639f?apiKey=freekey', (error, response, body) => {
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
