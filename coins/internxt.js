/**
 * @title Internxt
 * @symbol INXT
 * @ethContractAddr 0xa8006c4ca56f24d6836727d106349320db7fef82
 * @implementation Dynamic
 * @cmcId internxt
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xa8006c4ca56f24d6836727d106349320db7fef82?apiKey=freekey', (error, response, body) => {
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
