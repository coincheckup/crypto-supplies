/**
 * @title TokenDesk
 * @symbol TDS
 * @ethContractAddr 0x6295Ab2BE04A617747481B292c390BfcA592Cf28
 * @implementation Dynamic
 * @cmcId tokendesk
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x6295Ab2BE04A617747481B292c390BfcA592Cf28?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
