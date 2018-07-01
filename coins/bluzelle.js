/**
 * @title Bluzelle
 * @symbol BLZ
 * @ethContractAddr 0x5732046a883704404f284ce41ffadd5b007fd668
 * @implementation Dynamic
 * @cmcId bluzelle
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5732046a883704404f284ce41ffadd5b007fd668?apiKey=freekey', (error, response, body) => {
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
