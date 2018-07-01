/**
 * @title Soarcoin
 * @symbol SOAR
 * @ethContractAddr 0xD65960FAcb8E4a2dFcb2C2212cb2e44a02e2a57E
 * @implementation Dynamic
 * @cmcId soarcoin
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xD65960FAcb8E4a2dFcb2C2212cb2e44a02e2a57E?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -6)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
