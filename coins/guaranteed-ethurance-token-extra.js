/**
* @title Guaranteed Ethurance Token Extra
* @symbol GETX
* @ethContractAddr 0x07a58629aaf3e1a0d07d8f43114b76bd5eee3b91
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x07a58629aaf3e1a0d07d8f43114b76bd5eee3b91?apiKey=freekey', (error, response, body) => {
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
