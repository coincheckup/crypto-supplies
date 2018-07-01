/**
* @title Ethbits
* @symbol ETBS
* @ethContractAddr 0x1b9743f556d65e757c4c650b4555baf354cb8bd3
* @implementation Dynamic
*/

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x1b9743f556d65e757c4c650b4555baf354cb8bd3?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -12)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
