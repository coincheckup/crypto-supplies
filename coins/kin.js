/**
* @title Kin
* @symbol KIN
* @ethContractAddr 0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5?apiKey=freekey', (error, response, body) => {
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
