/**
 * @title BitSerial
 * @symbol BTE
 * @ethContractAddr 0x6733d909e10ddedb8d6181b213de32a30ceac7ed
 * @implementation Dynamic
 * @cmcId bitserial
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6733d909e10ddedb8d6181b213de32a30ceac7ed?apiKey=freekey', (error, response, body) => {
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
