/**
 * @title Transcodium
 * @symbol TNS
 * @ethContractAddr 0xb0280743b44bf7db4b6be482b2ba7b75e5da096c
 * @implementation Dynamic
 * @cmcId transcodium
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xb0280743b44bf7db4b6be482b2ba7b75e5da096c?apiKey=freekey', (error, response, body) => {
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
