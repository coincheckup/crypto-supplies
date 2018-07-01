/**
 * @title Hi Mutual Society
 * @symbol HMC
 * @ethContractAddr 0xAa0bb10CEc1fa372eb3Abc17C933FC6ba863DD9E
 * @implementation Dynamic
 * @cmcId hi-mutual-society
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xAa0bb10CEc1fa372eb3Abc17C933FC6ba863DD9E?apiKey=freekey', (error, response, body) => {
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
