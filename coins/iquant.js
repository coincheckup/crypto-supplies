/**
 * @title iQuant
 * @symbol IQT
 * @ethContractAddr 0x51ee82641ac238bde34b9859f98f5f311d6e4954
 * @implementation Dynamic
 * @cmcId iquant
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x51ee82641ac238bde34b9859f98f5f311d6e4954?apiKey=freekey', (error, response, body) => {
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
