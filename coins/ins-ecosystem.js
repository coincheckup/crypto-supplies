/**
 * @title INS Ecosystem
 * @symbol INS
 * @ethContractAddr 0x5b2e4a700dfbc560061e957edec8f6eeeb74a320
 * @implementation Dynamic
 * @cmcId ins-ecosystem
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x5b2e4a700dfbc560061e957edec8f6eeeb74a320?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -10)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
