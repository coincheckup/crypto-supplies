/**
* @title Presearch
* @symbol PRE
* @ethContractAddr 0x88a3e4f35d64aad41a6d4030ac9afe4356cb84fa
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x88a3e4f35d64aad41a6d4030ac9afe4356cb84fa?apiKey=freekey', (error, response, body) => {
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
