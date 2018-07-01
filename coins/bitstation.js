/**
* @title BitStation
* @symbol BSTN
* @ethContractAddr 0x2f8472dd7ecf7ca760c8f6b45db20ca7cf52f8d7
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x2f8472dd7ecf7ca760c8f6b45db20ca7cf52f8d7?apiKey=freekey', (error, response, body) => {
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
