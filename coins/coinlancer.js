/**
 * @title Coinlancer
 * @symbol CL
 * @ethContractAddr 0xe81d72d14b1516e68ac3190a46c93302cc8ed60f
 * @implementation Dynamic
 * @cmcId coinlancer
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xe81d72d14b1516e68ac3190a46c93302cc8ed60f?apiKey=freekey', (error, response, body) => {
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
